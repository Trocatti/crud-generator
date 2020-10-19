<template>
  <ValidationObserver
    ref="observer"
    tag="form"
    @submit.prevent="onSubmit"
    @reset="onReset"
  >
    <template v-for="(row, index) in formList">
      <b-form-row :key="index" align-v="center" v-bind="row.self">
        <template v-for="(col, index) in row.fields">
          <b-col
            :key="index"
            :ref="col.field.modelName || col.field.component"
            v-bind="col.column"
          >
            <Container
              :model="selfModel"
              :field="col.field"
              :container="col.container"
              :type="type"
              :ref="col.field.modelName || col.field.component"
              @applyRules="applyRules"
              @emitEvent="emitEvent"
            />
          </b-col>
        </template>
      </b-form-row>
    </template>
    <slot name="extraComponents"></slot>
  </ValidationObserver>
</template>

<script src="./formGenerator.js"></script>
