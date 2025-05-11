import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const dummyConversations = [
  {
    id: '1',
    participants: {
      client: {
        id: '1',
        name: 'John Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
      },
      freelancer: {
        id: '2',
        name: 'Sarah Wilson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
      }
    },
    messages: [
      {
        id: '1',
        senderId: '1',
        text: 'Hi Sarah, I saw your profile and I'm interested in your web development services.',
        timestamp: '2024-03-10T10:00:00'
      },
      {
        id: '2',
        senderId: '2',
        text: 'Hello John! Thank you for reaching out. I'd be happy to discuss your project.',
        timestamp: '2024-03-10T10:05:00'
      }
    ]
  },
  {
    id: '2',
    participants: {
      client: {
        id: '3',
        name: 'Emma Davis',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
      },
      freelancer: {
        id: '4',
        name: 'Michael Brown',
        avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
      }
    },
    messages: [
      {
        id: '1',
        senderId: '3',
        text: 'Hey Michael, are you available for a mobile app project?',
        timestamp: '2024-03-09T15:30:00'
      },
      {
        id: '2',
        senderId: '4',
        text: 'Hi Emma! Yes, I am. Could you tell me more about your requirements?',
        timestamp: '2024-03-09T15:35:00'
      }
    ]
  }
];

function Messages() {
  const [conversations] = useState(dummyConversations);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const user = useSelector((state) => state.user);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, {
            id: String(conv.messages.length + 1),
            senderId: user.role === 'client' ? conv.participants.client.id : conv.participants.freelancer.id,
            text: newMessage,
            timestamp: new Date().toISOString()
          }]
        };
      }
      return conv;
    });

    setSelectedConversation(updatedConversations.find(conv => conv.id === selectedConversation.id));
    setNewMessage('');
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex h-[calc(100vh-200px)] bg-gray-100 p-6">
      {/* Conversations List */}
      <div className="w-1/4 bg-white rounded-l-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-4xl font-semibold">Messages</h2>
        </div>
        <div className="overflow-y-auto h-full">
          {conversations.map(conversation => (
            <div
              key={conversation.id}
              className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                selectedConversation?.id === conversation.id ? 'bg-gray-100' : ''
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.role === 'client' 
                    ? conversation.participants.freelancer.avatar 
                    : conversation.participants.client.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-3xl font-medium">
                    {user.role === 'client' 
                      ? conversation.participants.freelancer.name 
                      : conversation.participants.client.name}
                  </h3>
                  <p className="text-2xl text-gray-500">
                    {conversation.messages[conversation.messages.length - 1].text.substring(0, 30)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-3/4 bg-white rounded-r-lg shadow-lg flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img
                  src={user.role === 'client' 
                    ? selectedConversation.participants.freelancer.avatar 
                    : selectedConversation.participants.client.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="text-4xl font-semibold">
                  {user.role === 'client' 
                    ? selectedConversation.participants.freelancer.name 
                    : selectedConversation.participants.client.name}
                </h2>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === (user.role === 'client' 
                      ? selectedConversation.participants.client.id 
                      : selectedConversation.participants.freelancer.id)
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-lg ${
                      message.senderId === (user.role === 'client' 
                        ? selectedConversation.participants.client.id 
                        : selectedConversation.participants.freelancer.id)
                        ? 'bg-primary text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    <p className="text-2xl">{message.text}</p>
                    <p className="text-xl mt-2 text-gray-300">
                      {formatTimestamp(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-4 border border-gray-300 rounded-lg text-2xl focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primaryHover text-2xl"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-3xl text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;