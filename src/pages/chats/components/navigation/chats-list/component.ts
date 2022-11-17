import { type Block } from "core/dom";
import { WithStoreBlock } from "hocs/components";
import { ChatComponent } from "../chat-component";
import template from "./template";

export class ChatsList extends WithStoreBlock {
  protected render() {
    return template;
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this._createChatsList();
  }

  private _createChatsList() {
    const chats = this.store.getChatsDataByPath();

    const chatsList = [] as Block[];
    Object.keys(chats!).forEach((id) => {
      chatsList.push(new ChatComponent(id));
    });
    this.children.chats = chatsList;
  }
}
