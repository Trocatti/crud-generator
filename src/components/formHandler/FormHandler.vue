<template>
  <component
    :is="collapse ? 'CardCollapse' : 'b-card'"
    :collapse="collapse"
    :title="collapse ? title : ''"
  >
    <b-card-title v-if="!collapse">{{ title }}</b-card-title>
    <slot name="beforeRow"></slot>
    <FormGenerator
      :model="model"
      :formList="formList"
      :showPreLoader="showPreLoader"
      :type="type"
      @dispararSubmit="dispararSubmit"
      @dispararReset="dispararReset"
      @emitEvent="emitEvent"
      @setPreLoaderVisibility="setPreLoaderVisibility"
    >
      <template slot="extraComponents">
        <slot name="afterRow"></slot>
      </template>
    </FormGenerator>
    <PreLoader :showPreLoader="preLoaderVisible" :hasTitleParent="!!title" />
  </component>
</template>

<style lang="scss" src="./formHandler.scss"></style>
<script src="./formHandler.js"></script>
