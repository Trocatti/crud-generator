<template>
  <component
    :is="container.component"
    :label-class="required"
    :label="label"
    class="form-group-format"
    v-bind="container"
  >
    <Field
      :model="model"
      :container="container"
      :field="field"
      :type="type"
      ref="field"
      @emitEvent="emitEvent"
      @applyRules="applyRules"
    />
  </component>
</template>

<script src="./container.js"></script>
