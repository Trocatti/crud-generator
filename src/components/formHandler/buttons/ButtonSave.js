import Button from "./Button";

export default class ButtonSave {
  static create(bind) {
    return Button.create({
      variant: "primary",
      type: "submit",
      caption: "Salvar",
      icon: "save",
      ...bind
    });
  }
}
