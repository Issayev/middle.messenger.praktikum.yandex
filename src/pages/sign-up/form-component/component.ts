import { InputForm } from "components";
import { afterValidationCallback } from "./after-validation-callback";
import { EnumInputFields, MapInputFieldsProps } from "./fields";

export class SignUpPageForm extends InputForm {
  constructor() {
    super({
      enumInputFieldsNames: EnumInputFields,
      mapInputToProps: MapInputFieldsProps,
      props: {
        afterValidationCallback,
        formTitle: "Sign Up",
        componentName: "SignUp Form Component",
      },
    });
  }
}
