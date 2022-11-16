import { ChatsAPI } from "api";
import {
  APIResponseHasError,
  transformChatsGetResponseToChatsData,
} from "utils/api";

export class ChatsServiceClass {
  async getChats(afterRequestCallback: TAfterRequestCallback = () => {}) {
    const request = await ChatsAPI.getChats();
    const { status, response } = request;

    console.log(
      `GET CHATS REQUEST:status ${status}; response: ${JSON.stringify(
        response
      )}`
    );

    if (!APIResponseHasError(response)) {
      window.store.dispatch({
        chats: transformChatsGetResponseToChatsData(response),
      });
    }

    await afterRequestCallback(response);

    return response;
  }

  async createChat(
    data: TCreateChatDTO,
    afterRequestCallback: TAfterRequestCallback = () => {}
  ) {
    const request = await ChatsAPI.createChat(data);
    const { status, response } = request;

    console.log(
      `CREATE CHAT REQUEST: status ${status}; response: ${JSON.stringify(
        response
      )}`
    );

    await afterRequestCallback(response);

    return response;
  }

  async changeAvatar(chatID: string, avatarForm: FormData) {
    avatarForm.append("chatId", chatID);

    const request = await ChatsAPI.changeAvatar(avatarForm);
    const { status, response } = request;

    console.log(
      `CHANGE CHAT(${chatID}) AVATAR REQUEST: status ${status}; response: ${JSON.stringify(
        response
      )}`
    );

    // if (!APIResponseHasError(response)) {
    //   this.store.setState();
    // }
  }
}

export const ChatsService = new ChatsServiceClass();
