<template>
  <div>
    <CreateHandler
      :instance="commonInstance"
      :collapse="crudProperties.create.collapse"
      :rows="crudProperties.create.rows"
      :title="crudProperties.create.title"
      v-if="crudProperties.create"
      @updateList="updateList"
    />
    <FilterHandler
      :collapse="crudProperties.filter.collapse"
      :rows="crudProperties.filter.rows"
      :title="crudProperties.filter.title"
      v-if="crudProperties.filter"
      @filter="list"
      @cleanFilter="list"
    />
    <ListHandler
      :service="commonInstance.getService()"
      :fields="crudProperties.list.fields"
      :title="crudProperties.list.title"
      :canDelete="crudProperties.list.canDelete"
      v-if="crudProperties.list"
      ref="listHandler"
      @showEditModal="showEditModal"
    />
    <EditHandler
      :instance="editInstance"
      :rows="crudProperties.edit.rows"
      :title="crudProperties.edit.title"
      :showModal="editModalVisibility"
      :model="editModel"
      v-if="crudProperties.edit && editModalVisibility"
      @showSelf="editModalVisibility = $event"
      @updateList="updateList"
    />
  </div>
</template>

<script src="./crud.js"></script>
