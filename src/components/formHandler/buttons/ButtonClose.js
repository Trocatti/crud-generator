import Button from "./Button";

export default class ButtonClose {
  static create(bind) {
    return Button.create({
      caption: "Fechar",
      method: "closeModal",
      icon: "times",
      ...bind
    });
  }
}
