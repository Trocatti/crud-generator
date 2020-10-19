<template>
  <DynValidation :container="container" :field="field">
    <b-form-select
      :disabled="disabled"
      :readonly="readonly"
      :hidden="hidden"
      v-model="model[field.modelName]"
      v-bind="bindField"
      :name="field.modelName + 'Name'"
      @blur.native.stop="validateSelectOnBlur"
    >
      <template v-slot:first>
        <option :value="null" v-if="model[field.modelName] === null"
          >Selecione...</option
        >
        <option :value="undefined" v-else>Selecione...</option>
      </template>
    </b-form-select>
  </DynValidation>
</template>

<script src="./dynSelect.js"></script>
