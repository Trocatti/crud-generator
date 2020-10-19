<template>
  <div>
    <b-button v-bind="field" @click="emitEvent(field.method || '')">
      <v-icon
        v-if="field.icon"
        :name="field.icon"
        scale="1"
        class="mr-1"
      ></v-icon>
      <slot>{{ field.caption }}</slot>
    </b-button>
  </div>
</template>

<script src="./dynButton.js"></script>
