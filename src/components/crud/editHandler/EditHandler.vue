<template>
  <div>
    <b-modal id="modal-1" hide-header hide-footer size="xl" v-model="showSelf">
      <FormHandler
        :title="title"
        :model="model"
        :form-list="rows"
        :type="type"
        class="mb-0"
        @save="save"
        @closeModal="closeModal"
        @dispararSubmit="save"
      >
        <template slot="afterRow">
          <b-row class="justify-content-end mt-3">
            <b-col lg="2">
              <b-button
                :disabled="this.instance.equals(this.previousModel)"
                block
                type="submit"
                variant="primary"
                class="mb-3"
              >
                <v-icon name="save" scale="1" class="mr-1" />Salvar
              </b-button>
            </b-col>

            <b-col lg="2">
              <b-button block @click="closeModal">
                <v-icon name="times" scale="1" class="mr-1" />Fechar
              </b-button>
            </b-col>
          </b-row>
        </template>
      </FormHandler>
    </b-modal>
  </div>
</template>

<script src="./editHandler.js"></script>
