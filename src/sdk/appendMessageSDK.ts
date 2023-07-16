import axios from "axios";

export interface IMetadata {
  organization_uuid: string;
  conversation_uuid: string;
}

interface IRequest extends IBaseRequest {
  sessionKey: string;
  prompt: string;
  metadata: IMetadata;
}

export interface IResponse {
  done: boolean;
  message: string;
}

const createPayload = (payload: IRequest) => {
  const newPayload: IResourcePayload = {
    completion: {
      prompt: payload.prompt,
      timezone: "",
      model: "claude-2",
    },
    organization_uuid: payload.metadata.organization_uuid,
    conversation_uuid: payload.metadata.conversation_uuid,
    text: payload.prompt,
  };

  return  JSON.stringify(newPayload);
};

export async function appendMessageSDK(payload: IRequest) {
  const data = createPayload(payload);
  return axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: `${payload.baseURL}/api/append_message`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      "Content-Type": "application/json",
      accept: "text/event-stream",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
    responseType: "stream",
    data: data,
    timeout: 0,
  }).then((res) => {
    console.log(res);
    const { data, status } = res;
    if (status === 200) {
      const stream = data;
      return stream;
    }
    return res;
  });
}
