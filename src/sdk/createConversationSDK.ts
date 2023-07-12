import axios from "axios";

type IResponse = {
  name: string;
  uuid: string;
  created_at: string;
  updated_at: string;
};

interface IRequest {
  uuid: string;
  organization_uuid: organizationType;
  sessionKey: string;
  name?: string;
}

async function createConversationSDK(payload: IRequest): Promise<IResponse> {
  const data = { name: payload.name, uuid: payload.uuid };
  const res = axios.request<any, IResponse>({
    method: "post",
    maxBodyLength: Infinity,
    url: `https://claude.ai/api/organizations/${payload.organization_uuid}/chat_conversations`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
    data,
  });

  return res;
}

export default createConversationSDK;
