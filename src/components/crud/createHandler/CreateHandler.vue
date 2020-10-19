<template>
  <b-row>
    <b-col>
      <FormHandler
        :title="title"
        :form-list="rows"
        :collapse="collapse"
        :showPreLoader="true"
        :type="type"
        class="mt-2"
        id="createHandler"
        @dispararSubmit="create"
      ></FormHandler>
    </b-col>
  </b-row>
</template>

<script src="./createHandler.js"></script>
