import Button from "./Button";

export default class ButtonDelete {
  static create(bind) {
    return Button.create({
      variant: "danger",
      caption: "Excluir",
      icon: "regular/trash-alt",
      ...bind
    });
  }
}
