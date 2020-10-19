import Button from "./Button";

export default class ButtonCreate {
  static create(bind) {
    return Button.create({
      variant: "success",
      type: "submit",
      caption: "Criar",
      icon: "plus",
      ...bind
    });
  }
}
