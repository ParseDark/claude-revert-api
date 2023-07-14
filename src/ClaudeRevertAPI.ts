import { v4 } from "uuid";

import { createConversationSDK } from "./sdk/createConversationSDK";
import { IMetadata, appendMessageSDK } from "./sdk/appendMessageSDK";
import { conversationListSDK } from "./sdk/getConversationListSDK";
import { deleteConversationSDK } from "./sdk/deleteConversationSDK";
import { getConversationSDK } from "./sdk/getConversationSDK";
import { renameConversationSDK } from "./sdk/renameConversationSDK";

export class ClaudeRevertAPI {
  baseURL?: string = "https://claude.ai";
  sessionKey: string;
  constructor(baseURL: string, sessionKey: string) {
    this.baseURL = baseURL;
    this.sessionKey = sessionKey;
  }

  createConversation(organization_uuid: string) {
    return createConversationSDK({
      baseURL: this.baseURL,
      sessionKey: this.sessionKey,
      uuid: v4(),
      organization_uuid,
    });
  }

  appendNewMessage(prompt: string, metadata: IMetadata) {
    return appendMessageSDK({
      baseURL: this.baseURL,
      sessionKey: this.sessionKey,
      prompt,
      metadata,
    });
  }

  conversationList(organization_uuid: organizationType) {
    return conversationListSDK({
      baseURL: this.baseURL,
      sessionKey: this.sessionKey,
      organization_uuid,
    });
  }

  deleteConversation(
    organization_uuid: organizationType,
    conversation_uuid: conversationType
  ) {
    return deleteConversationSDK({
      baseURL: this.baseURL,
      sessionKey: this.sessionKey,
      organization_uuid,
      conversation_uuid,
    });
  }

  getConversation(
    organization_uuid: organizationType,
    conversation_uuid: conversationType
  ) {
    return getConversationSDK({
      baseURL: this.baseURL,
      sessionKey: this.sessionKey,
      organization_uuid,
      conversation_uuid,
    });
  }

  renameConversation(
    title: string,
    organization_uuid: organizationType,
    conversation_uuid: conversationType
  ) {
    return renameConversationSDK({
      title,
      baseURL: this.baseURL,
      sessionKey: this.sessionKey,
      organization_uuid,
      conversation_uuid,
    });
  }
}
