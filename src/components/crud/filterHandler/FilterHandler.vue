<template>
  <div>
    <FormHandler
      :title="title"
      :form-list="rows"
      :collapse="collapse"
      :type="type"
      id="filterHandler"
      @dispararSubmit="filter"
      @dispararReset="cleanFilter"
    ></FormHandler>
  </div>
</template>

<script src="./filterHandler.js"></script>
