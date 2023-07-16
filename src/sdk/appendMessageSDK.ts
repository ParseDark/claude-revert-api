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

  return newPayload;
};

export async function appendMessageSDK(payload: IRequest): Promise<any> {
  const data = createPayload(payload);
  const res = await axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: `${payload.baseURL}/api/append_message`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Accept: "text/event-stream, text/event-stream",
      "Content-Type": "application/json",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
    responseType: 'stream',
    data: data,
  
   
  });
  if (res.status === 200) {
    const stream = res.data;

    return stream;
  }

  return res;
}
