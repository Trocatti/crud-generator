<template>
  <div>
    <div v-if="!field.validations" :name="container.label">
      <slot></slot>
    </div>

    <ValidationProvider
      v-else
      :name="container.label"
      :rules="field.validations"
      :ref="field.modelName"
      v-slot="{ errors }"
      tag="div"
      @applyRules="applyRules"
    >
      <slot></slot>
      <ValidationFeedBack :errors="errors" />
    </ValidationProvider>
  </div>
</template>

<script src="./dynValidation.js"></script>
