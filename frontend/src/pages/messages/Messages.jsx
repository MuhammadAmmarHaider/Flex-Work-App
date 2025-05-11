import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Messages() {
  const user = useSelector((state) => state.user);
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchConversations();
    subscribeToMessages();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation.id);
      markMessagesAsRead(selectedConversation.id);
    }
  }, [selectedConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchConversations = async () => {
    const { data, error } = await supabase
      .from('conversations')
      .select(`
        *,
        client:client_id(*),
        freelancer:freelancer_id(*),
        job:job_id(*)
      `)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching conversations:', error);
      return;
    }

    setConversations(data);
  };

  const fetchMessages = async (conversationId) => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      return;
    }

    setMessages(data);
  };

  const markMessagesAsRead = async (conversationId) => {
    const { error } = await supabase
      .from('messages')
      .update({ read: true })
      .eq('conversation_id', conversationId)
      .neq('sender_id', user.id);

    if (error) {
      console.error('Error marking messages as read:', error);
    }
  };

  const subscribeToMessages = () => {
    supabase
      .channel('messages')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages'
      }, (payload) => {
        if (payload.new.conversation_id === selectedConversation?.id) {
          setMessages(prev => [...prev, payload.new]);
          markMessagesAsRead(selectedConversation.id);
        }
      })
      .subscribe();
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const { error } = await supabase
      .from('messages')
      .insert({
        conversation_id: selectedConversation.id,
        sender_id: user.id,
        content: newMessage
      });

    if (error) {
      console.error('Error sending message:', error);
      return;
    }

    setNewMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-200px)] mx-20 my-10">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
        <h2 className="text-4xl font-semibold p-6 border-b">Messages</h2>
        <div className="divide-y">
          {conversations.map((conversation) => {
            const otherUser = user.role === 'client' 
              ? conversation.freelancer 
              : conversation.client;
            
            return (
              <div
                key={conversation.id}
                className={`p-6 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation?.id === conversation.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-medium">{otherUser.name}</h3>
                  <span className="text-2xl text-gray-500">
                    {new Date(conversation.updated_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-2xl text-gray-600 mt-2 truncate">
                  {conversation.job?.title || 'Direct message'}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-6 border-b">
              <h3 className="text-4xl font-semibold">
                {user.role === 'client' 
                  ? selectedConversation.freelancer.name 
                  : selectedConversation.client.name}
              </h3>
              {selectedConversation.job && (
                <p className="text-2xl text-gray-600 mt-2">
                  {selectedConversation.job.title}
                </p>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender_id === user.id ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-xl p-4 ${
                        message.sender_id === user.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <p className="text-2xl">{message.content}</p>
                      <p className="text-xl mt-2 opacity-70">
                        {new Date(message.created_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-6 border-t">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border rounded-xl px-6 py-4 text-2xl"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primaryHover"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-3xl text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;