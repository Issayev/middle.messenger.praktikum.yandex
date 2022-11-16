import request from "./http-trasnport";

class ChatsAPIClass {
  getChats() {
    return request.get("chats");
  }

  createChat(data: TCreateChatDTO) {
    return request.post("chats", { data });
  }

  changeAvatar(data: FormData) {
    return request.put("chats/avatar", {
      headers: { "Content-Type": "multipart/form-data" },
      data,
    });
  }
}

export const ChatsAPI = new ChatsAPIClass();