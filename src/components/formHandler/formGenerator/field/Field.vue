<template>
  <component
    :is="componentType"
    :model="model"
    :container="container"
    :field="field"
    :bind-field="bindField"
    :crudType="type"
    ref="componentType"
    @emitEvent="emitEvent"
    @applyRules="applyRules"
  />
</template>

<script src="./field.js"></script>
