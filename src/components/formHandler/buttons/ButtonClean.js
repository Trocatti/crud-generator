import Button from "./Button";

export default class ButtonClean {
  static create(bind) {
    return Button.create({
      type: "reset",
      caption: "Limpar",
      icon: "eraser",
      ...bind
    });
  }
}
