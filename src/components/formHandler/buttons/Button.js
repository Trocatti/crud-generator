export default class Button {
  static getColumnSize(size) {
    return {
      xs: 12,
      sm: 12,
      md: 12,
      lg: size || 2
    };
  }

  static getProperties() {
    return {
      button: "b-button"
    };
  }

  static getContainers(_class) {
    return {
      component: "b-form-group",
      class: `form-group-initial ${_class}`
    };
  }

  /**
   * @example
   * <caption>Método recebe um objeto de configuração com as seguintes propriedades:</caption>
   * classCol(String), classContainer(String), classSelf(String), styleSelf(String),
   * block(Boolean, Ocupa todo o espaço da coluna, default: false), disabled(Boolean, default: false),
   * hidden(Boolean, default: false), variant(String, primary, success, danger etc),
   * type(String, submit, reset e button, default: button), size(Number, 1 à 12, default: 2),
   * caption(String), method(String, nome do método que será executado), icon(String, nome do ícone FontAwesome)
   * @example { type: "reset", caption: "Clean", icon: "eraser" }
   * @param {Object} bind Object options
   * @returns {Object} Object options
   */
  static create(bind) {
    return {
      column: {
        class: bind.classCol,
        hidden: bind.hidden || false,
        ...this.getColumnSize(bind.size)
      },
      container: {
        ...this.getContainers(bind.classContainer)
      },
      field: {
        component: this.getProperties().button,
        block: bind.block || true,
        disabled: bind.disabled || false,
        variant: bind.variant,
        type: bind.type || "button",
        caption: bind.caption,
        method: bind.method,
        icon: bind.icon,
        class: bind.classSelf || "mt-2",
        style: bind.styleSelf
      }
    };
  }
}
