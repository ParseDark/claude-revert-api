type organizationType = string;
type promptType = string;
type conversationType = string;

interface ICompletion {
  prompt: promptType;
  timezone: string;
  model: string;
}

interface IAttachment {
  extracted_content: string;
  file_name: string;
  file_size: number;
  file_type: string;
}

interface IResourcePayload {
  completion: ICompletion;
  organization_uuid: organizationType;
  conversation_uuid: conversationType;
  text: promptType;
  attachments: IAttachment[];
}

interface IChatItem {
  created_at: string;
  sender: string;
  text: promptType;
  updated_at: string;
  index: number;
}
type IChatHistory = IChatHistory[];

interface conversationItem {
  uuid: string;
  name: string;
  summary: string;
  created_at: string;
  updated_at: string;
}
type conversationList = conversationItem[];

interface IBaseRequest {
  baseURL?: string;
}
