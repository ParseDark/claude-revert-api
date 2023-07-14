// import axios from "../lib/axios";
import axios from "axios";

type IResponse = conversationList;

interface IRequest {
  organization_uuid: organizationType;
  sessionKey: string;
}

export async function conversationListSDK(
  payload: IRequest
): Promise<IResponse> {
  const res = axios.request<any, IResponse>({
    method: "get",
    maxBodyLength: Infinity,
    url: `/organizations/${payload.organization_uuid}/chat_conversations`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
  });

  return res;
}
