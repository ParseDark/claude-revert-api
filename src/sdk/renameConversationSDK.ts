import axios from "axios";

type IResponse = {};

interface IRequest {
  organization_uuid: organizationType;
  conversation_uuid: conversationType;
  sessionKey: string;
  title: string;
}

async function renameConversationSDK(payload: IRequest): Promise<IResponse> {
  const data = {
    title: payload.title,
    organization_uuid: payload.organization_uuid,
    conversation_uuid: payload.conversation_uuid,
  };
  const res = axios.request<any, IResponse>({
    method: "post",
    maxBodyLength: Infinity,
    url: `https://claude.ai/api/rename_chat`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
    data,
  });

  return res;
}

export default renameConversationSDK;
