import Button from "./Button";

export default class ButtonSearch {
  static create(bind) {
    return Button.create({
      variant: "primary",
      type: "submit",
      caption: "Filtrar",
      icon: "search",
      ...bind
    });
  }
}
