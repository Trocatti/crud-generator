export default {
  name: "crud",
  components: {
    CreateHandler: () =>
      import(
        /* webpackChunkName: "createHandler" */ "./createHandler/CreateHandler.vue"
      ),
    EditHandler: () =>
      import(
        /* webpackChunkName: "editHandler" */ "./editHandler/EditHandler.vue"
      ),
    ListHandler: () =>
      import(
        /* webpackChunkName: "listHandler" */ "./listHandler/ListHandler.vue"
      ),
    FilterHandler: () =>
      import(
        /* webpackChunkName: "FilterHandler" */ "./filterHandler/FilterHandler.vue"
      )
  },
  props: {
    crudProperties: {
      type: Object
    }
  },
  methods: {
    list(filterParams) {
      this.$refs.listHandler.list(filterParams);
    },
    updateList(model) {
      this.$refs.listHandler.updateList(model);
    },
    showEditModal(rowModel) {
      this.editInstance = new this.crudProperties.domainClass(rowModel);
      this.editModalVisibility = true;
      this.editModel = rowModel;
    }
  },
  created() {
    this.commonInstance = new this.crudProperties.domainClass();
  },
  data() {
    return {
      editModalVisibility: false,
      editModel: {},
      commonInstance: null,
      editInstance: null
    };
  }
};
