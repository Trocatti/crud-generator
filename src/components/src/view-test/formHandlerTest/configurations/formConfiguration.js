import Field1 from "../fields/Field1";
import Field2 from "../fields/Field2";
import Field3 from "../fields/Field3";
import Field4 from "../fields/Field4";
import ButtonCreate from "../../../../formHandler/buttons/ButtonCreate";
import ButtonClean from "../../../../formHandler/buttons/ButtonClean";
import Button from "../../../../formHandler/buttons/Button";

export default {
  title: "Form Handler Test",
  collapse: {
    id: "collapse",
    visible: true,
    accordion: "formHandlerTest"
  },
  rows: [
    {
      self: {},
      fields: [
        Field1.getField({}, "rows_field1"),
        Field2.getField({}, "rows_field2"),
        Field3.getField({}, "rows_field3"),
        Field4.getField({}, "rows_field4")
      ]
    },
    {
      self: {},
      fields: [
        ButtonCreate.create(),
        ButtonClean.create(),
        Button.create({
          block: false,
          variant: "",
          type: "button",
          caption: "Teste",
          method: "mehtodTest"
        })
      ]
    }
  ]
};
