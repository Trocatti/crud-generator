<template>
  <DynValidation :container="container" :field="field">
    <component
      :is="field.component"
      :disabled="disabled"
      :readonly="readonly"
      :hidden="hidden"
      v-model="model[field.modelName]"
      v-bind="bindField"
      :name="field.modelName + 'Name'"
      @input="onInput($event)"
    ></component>
  </DynValidation>
</template>

<script src="./dynDefault.js"></script>
