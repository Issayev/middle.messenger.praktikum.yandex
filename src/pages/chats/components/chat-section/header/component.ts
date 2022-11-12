import { Block } from "core/dom";
import { TextComponent, Button } from "components";
import functionalButtonBackgroundImage from "static/functional-button.png";
import template from "./template";

export class ChatSectionHeader extends Block {
  constructor() {
    const children = {} as TComponentChildren;

    children.chatTitle = new TextComponent({
      props: {
        text: "Chat Title Placeholder",
        htmlClass: "chat-title",
      },
    });

    children.functionalButton = new Button({
      props: {
        htmlClass: "functional-button",
        backgroundImage: functionalButtonBackgroundImage,
      },
    });

    super({ children });
  }

  protected render() {
    return template;
  }
}
