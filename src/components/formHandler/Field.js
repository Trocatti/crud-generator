export default class Field {
  static getColumnSize(size = 3) {
    return {
      xs: 12,
      sm: 12,
      md: 6,
      lg: size
    };
  }

  static getFields() {
    return {
      select: "b-form-select",
      input: "b-form-input",
      checkboxGroup: "b-form-checkbox-group",
      checkbox: "b-form-checkbox",
      radioGroup: "b-form-radio-group",
      radio: "b-form-radio",
      file: "b-form-file",
      link: "b-link",
      button: "b-button",
      textArea: "b-form-textarea"
    };
  }

  static getContainers() {
    return {
      formGroup: "b-form-group",
      inputGroup: "b-input-group"
    };
  }

  static getColumnDefault(size, bind = {}) {
    return {
      column: {
        ...this.getColumnSize(size),
        ...bind
      }
    };
  }

  static getContainerDefault(label, bind = {}) {
    return {
      container: {
        component: this.getContainers().formGroup,
        label,
        ...bind
      }
    };
  }
}
