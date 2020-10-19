<template>
  <div>
    <h4>
      <b>
        FormGenerator
      </b>
    </h4>
    <FormGenerator
      :model="model"
      :formList="rows"
      @dispararSubmit="create"
      @dispararReset="reset"
    >
    </FormGenerator>

    <hr />

    <FormHandler
      :title="'FormHandler - Card'"
      :form-list="rows"
      :showPreLoader="true"
      @dispararSubmit="create"
    ></FormHandler>

    <hr />

    <FormHandler
      :title="'FormHandler - Collapse'"
      :form-list="rows"
      :showPreLoader="true"
      :collapse="collapse1"
      @dispararSubmit="create"
    ></FormHandler>

    <hr />

    <FormHandler
      :title="'FormHandler - Accordion'"
      :form-list="rows"
      :showPreLoader="true"
      :collapse="collapse2"
      @dispararSubmit="create"
    ></FormHandler>

    <hr />
  </div>
</template>

<script src="./parametro.js"></script>
