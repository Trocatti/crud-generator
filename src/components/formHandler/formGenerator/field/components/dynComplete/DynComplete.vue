<template>
  <div>
    <DynValidation :container="container" :field="field">
      <b-form-input
        :list="field.modelName"
        :disabled="disabled"
        :readonly="readonly"
        :hidden="hidden"
        v-model="model[field.modelName]"
        v-bind="bindField"
        :name="field.modelName + 'Name'"
        @input="onInput($event)"
      ></b-form-input>
    </DynValidation>
    <datalist
      :id="field.modelName"
      v-if="field.search && autoCompleteList.length > 0"
    >
      <option
        :key="index"
        :value="item.value"
        :label="item.text"
        v-for="(item, index) in autoCompleteList"
      ></option>
    </datalist>
  </div>
</template>

<script src="./dynComplete.js"></script>
