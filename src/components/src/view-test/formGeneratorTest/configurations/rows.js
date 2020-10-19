import Field1 from "../fields/Field1";
import Field2 from "../fields/Field2";
import Field3 from "../fields/Field3";
import Field4 from "../fields/Field4";
import ButtonCreate from "../../../../formHandler/buttons/ButtonCreate";
import ButtonClean from "../../../../formHandler/buttons/ButtonClean";
import Button from "../../../../formHandler/buttons/Button";

export default [
  {
    self: {},
    fields: [
      Field1.getField({}),
      Field2.getField({}),
      Field3.getField({}),
      Field4.getField({})
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
];
