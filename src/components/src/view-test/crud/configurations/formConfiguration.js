import Field1 from "../fields/Field1";
import Field2 from "../fields/Field2";
import Field3 from "../fields/Field3";
import Field4 from "../fields/Field4";
import ButtonCreate from "../../../../formHandler/buttons/ButtonCreate";
import ButtonSearch from "../../../../formHandler/buttons/ButtonSearch";
import ButtonClean from "../../../../formHandler/buttons/ButtonClean";
import Button from "../../../../formHandler/buttons/Button";
import DomainTest from "./DomainTest";

export default {
  domainClass: DomainTest,
  create: {
    title: "Create Crud Test",
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
  },
  filter: {
    title: "Filter Crud Test",
    collapse: {
      id: "collapse2",
      visible: true,
      accordion: "formHandlerTest"
    },
    rows: [
      {
        self: {},
        fields: [
          Field1.getField({}, "field1_2"),
          Field2.getField({}, "field2_2"),
          Field3.getField({}, "field3_2"),
          Field4.getField({}, "field4_2")
        ]
      },
      {
        self: {},
        fields: [
          ButtonSearch.create(),
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
  },
  list: {
    title: "List test",
    fields: [
      {
        key: "column1",
        label: "Column1",
        sortable: false
      },
      {
        key: "column2",
        label: "column2",
        sortable: true
      }
    ]
  }
};
