import formGenerator from "@/components/formHandler/formGenerator/formGenerator.js";

const formList = [
  {
    self: {},
    fields: [
      { field: { modelName: "teste" } },
      { field: { modelName: "teste2" } },
      { field: { modelName: "teste3" } }
    ]
  }
];

test('Test if "defineModel" is returning model', async () => {
  expect(formGenerator.methods.defineModel(formList)).toMatchObject({
    teste: null,
    teste2: null,
    teste3: null
  });
});
