import Block from "core/block";
import { Link, Input, HomeButton } from "components";
import { MainPage } from "core/renderDOM";
import { SignUpPage } from "pages";
import template from "./template";

export class LoginPage extends Block {
  constructor() {
    const children: ComponentChildren = {};

    children.submitButton = new Input({
      props: {
        type: "submit",
        value: "submit",
        htmlClass: "submit-button",
      },
    });

    children.signUpLink = new Link({
      props: {
        label: "Register Account",
        htmlName: "Sign up",
        htmlClass: "sign-up-link",
        events: {
          click: () => {
            console.log("click on sign up link");
            MainPage.component = new SignUpPage();
          },
        },
      },
    });

    children.homeButton = new HomeButton();

    children.formFields = [
      ["login", "Your Login"],
      ["password", "Your Password"],
    ].map(([name, placeholder]) => {
      return new Input({
        props: {
          placeholder,
          htmlName: name,
          htmlWrapper: {
            componentAlias: "wrapped",
            htmlWrapperTemplate:
              "<div class='form-field'>{{{ wrapped }}}</div>",
          },
        },
      });
    });

    super({ children });
  }

  render() {
    return template;
  }
}
