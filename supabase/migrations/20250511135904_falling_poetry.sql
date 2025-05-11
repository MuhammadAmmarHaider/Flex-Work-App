/*
  # Create messages and conversations tables

  1. New Tables
    - `conversations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `updated_at` (timestamp) 
      - `client_id` (uuid, references users)
      - `freelancer_id` (uuid, references users)
      - `job_id` (uuid, references jobs)
      - `status` (enum: active, archived)

    - `messages`
      - `id` (uuid, primary key) 
      - `conversation_id` (uuid, references conversations)
      - `sender_id` (uuid, references users)
      - `content` (text)
      - `created_at` (timestamp)
      - `read` (boolean)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to:
      - Read conversations they are part of
      - Create messages in their conversations
      - Update read status of messages sent to them
*/

-- Create conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  client_id uuid REFERENCES users(id) NOT NULL,
  freelancer_id uuid REFERENCES users(id) NOT NULL,
  job_id uuid REFERENCES jobs(id),
  status text DEFAULT 'active' CHECK (status IN ('active', 'archived'))
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid REFERENCES conversations(id) ON DELETE CASCADE NOT NULL,
  sender_id uuid REFERENCES users(id) NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Conversation policies
CREATE POLICY "Users can view their own conversations"
  ON conversations
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = client_id OR 
    auth.uid() = freelancer_id
  );

CREATE POLICY "Users can create conversations they are part of"
  ON conversations
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = client_id OR 
    auth.uid() = freelancer_id
  );

-- Message policies
CREATE POLICY "Users can view messages in their conversations"
  ON messages
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM conversations c
      WHERE c.id = conversation_id
      AND (c.client_id = auth.uid() OR c.freelancer_id = auth.uid())
    )
  );

CREATE POLICY "Users can send messages to their conversations"
  ON messages
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM conversations c
      WHERE c.id = conversation_id
      AND (c.client_id = auth.uid() OR c.freelancer_id = auth.uid())
    )
    AND sender_id = auth.uid()
  );

CREATE POLICY "Users can mark messages as read"
  ON messages
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM conversations c
      WHERE c.id = conversation_id
      AND (c.client_id = auth.uid() OR c.freelancer_id = auth.uid())
    )
  )
  WITH CHECK (
    read = true -- Only allow updating read status to true
  );

-- Create function to update conversation timestamp
CREATE OR REPLACE FUNCTION update_conversation_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE conversations 
  SET updated_at = now()
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update conversation timestamp on new message
CREATE TRIGGER update_conversation_timestamp
AFTER INSERT ON messages
FOR EACH ROW
EXECUTE FUNCTION update_conversation_timestamp();