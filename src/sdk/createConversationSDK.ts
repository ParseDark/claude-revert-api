import axios from "axios";

type IResponse = {
  name: string;
  uuid: string;
  created_at: string;
  updated_at: string;
};

interface IRequest extends IBaseRequest {
  uuid: string;
  organization_uuid: organizationType;
  sessionKey: string;
  name?: string;
}

export async function createConversationSDK(
  payload: IRequest
): Promise<IResponse> {
  const data = {
    name: payload.name,
    uuid: payload.uuid,
  };
  const res = axios.request<any, IResponse>({
    method: "post",
    maxBodyLength: Infinity,
    url: `${payload.baseURL}/api/organizations/${payload.organization_uuid}/chat_conversations`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
    data,
  });

  return res;
}
