<template>
  <b-card no-body>
    <b-card-header
      v-b-toggle="collapse.id"
      header-bg-variant="white"
      class="d-flex justify-content-between collapse"
      v-ripple
    >
      <b-card-title class="mb-0">{{ title }}</b-card-title>
      <div>
        <v-icon name="plus" class="plus" v-show="!isCollapse"></v-icon>
        <v-icon name="minus" class="minus" v-show="isCollapse"></v-icon>
      </div>
    </b-card-header>
    <b-collapse
      v-model="isCollapse"
      :id="collapse.id"
      :visible="collapse.visible"
      :accordion="collapse.accordion"
    >
      <b-card-body>
        <slot></slot>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<style src="./cardCollapse.scss" lang="scss" scoped></style>
<script src="./cardCollapse.js"></script>
