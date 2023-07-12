import axios from "axios";

interface IMetadata {
  organization_uuid: string;
  conversation_uuid: string;
}

interface IRequest {
  sessionKey: string;
  prompt: string;
  metadata: IMetadata;
}

interface IResponse {
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

async function appendMessageSDK(payload: IRequest): Promise<IResponse> {
  const data = createPayload(payload);
  const res = await axios.request<any, IResponse>({
    method: "post",
    maxBodyLength: Infinity,
    url: "https://claude.ai/api/append_message",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
      Accept: "text/event-stream, text/event-stream",
      "Content-Type": "application/json",
      Cookie: `sessionKey=${payload.sessionKey}`,
    },
    data: data,
  });

  return res;
}

export default appendMessageSDK;
