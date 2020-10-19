<template>
  <div id="listHandler">
    <b-card no-body>
      <b-card-header header-bg-variant="white">
        <b-card-title class="mb-0">{{ title }}</b-card-title>
      </b-card-header>
      <b-card-body>
        <div class="text-right">
          <label class="mr-1">Qtd. registros:</label>
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="md"
            style="width: 60px;"
            :options="pageOptions"
          ></b-form-select>
        </div>
        <b-table
          :per-page="perPage"
          :current-page="currentPage"
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :empty-text="emptyTableText"
          stacked="lg"
          v-model="itemsPerPage"
          class="font-13 text-center"
          responsive
          small
          hover
          bordered
          show-empty
          striped
        >
          <template v-slot:head(exclusao)="data">
            <b-form-checkbox
              name="checkbox"
              @change="selectAll"
              v-model="selectAllItens"
            ></b-form-checkbox>
          </template>

          <template v-slot:cell(exclusao)="data">
            <b-form-checkbox
              name="checkbox"
              v-model="selectedItems"
              :value="data.item"
            ></b-form-checkbox>
          </template>

          <template v-slot:cell(acoes)="row">
            <div class="d-flex justify-content-center align-items-center">
              <b-button
                variant="link"
                class="p-0 ml-1"
                @click="openEditModal(row.item)"
              >
                <v-icon name="pencil-alt" scale="0.9"></v-icon>
              </b-button>
            </div>
          </template>

          <template v-slot:cell(status)="row">
            <v-icon
              v-if="row.item.status == 1"
              class="color-success m-1"
              name="check-circle"
              title="Ativo"
              scale="0.9"
            ></v-icon>
            <v-icon
              v-if="row.item.status == 0"
              class="color-danger m-1"
              name="times"
              title="Inativo"
              scale="0.9"
            ></v-icon>
            <v-icon
              v-if="row.item.status == 2"
              class="color-warning m-1"
              name="exclamation-triangle"
              title="Em análise"
              scale="0.9"
            ></v-icon>
          </template>
        </b-table>
        <b-row>
          <b-col lg="10">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
            ></b-pagination>
          </b-col>
          <b-col lg="2" class="text-right">
            <b-button
              variant="danger"
              :disabled="this.selectedItems.length === 0"
              @click="openDeleteModal"
              block
              v-if="canDelete"
            >
              <v-icon name="regular/trash-alt" scale="1" class="mr-1"></v-icon
              >Excluir
            </b-button>
          </b-col>
        </b-row>
        <PreLoader :showPreLoader="preLoaderVisible" />
      </b-card-body>
    </b-card>
  </div>
</template>

<style src="./listHandler.scss" lang="scss" scoped></style>
<script src="./listHandler.js"></script>
