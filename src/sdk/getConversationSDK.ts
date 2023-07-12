import axios from "axios";

type IResponse = {
  chat_messages: IChatHistory;
  name: string;
  created_at: string;
  summary: string;
  updated_at: string;
  uuid: string;
};

interface IRequest {
  sessionKey: string;
  organization_uuid: organizationType;
  conversation_uuid: conversationType;
}

async function getConversationSDK(payload: IRequest): Promise<IResponse> {
  const res = axios.request<any, IResponse>({
    method: "get",
    maxBodyLength: Infinity,
    url: `https://claude.ai/api/organizations/${payload.organization_uuid}/chat_conversations/${payload.conversation_uuid}`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
  });

  return res;
}

export default getConversationSDK;
