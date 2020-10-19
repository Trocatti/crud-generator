import { BFormInput, BFormDatalist } from "bootstrap-vue";
import lodash from "lodash";
import mixinField from "../mixinField";

export default {
  name: "dynComplete",
  mixins: [mixinField],
  components: {
    BFormInput,
    BFormDatalist,
    lodash
  },
  methods: {
    /**
     * Processa a lista (Set) de objetos com o retorno do endpoint, criando e atribuindo (para o autoCompleteList) uma nova lista que servirá para apresentação no "datalist".
     * @param {*} data Lista (Set) de objetos com o retorno do endpoint.
     * @param { Array<String> } displayField Lista (Array<String>) dos campos que devem ser apresentados no "datalist".
     */
    defineAutoCompleteList(data, displayField) {
      data.forEach(item => {
        const parsedItem = JSON.parse(item);

        let value = "";
        displayField.forEach(
          field => (value += `${value != "" ? " - " : ""}${parsedItem[field]}`)
        );

        this.autoCompleteList.push({
          value: parsedItem[this.field.modelName],
          text: value
        });
      });
    },

    /**
     * Retorna um filtro (URI) com o valor e os dados do campo recebidos por parâmetro.
     * @param {*} value Valor preenchido no campo
     * @param {*} field Objeto com os dados ("id" e "type") do campo
     */
    createFilter(value, field) {
      const isNumber = !isNaN(parseFloat(value));
      const couldFilter =
        field.type != "number" || (field.type == "number" && isNumber);
      let filter = couldFilter ? `${field.id}=${encodeURI(value)}` : "";
      return filter != "" ? "?".concat(filter).concat("&_limit=5") : "";
    },

    /**
     * Analisa se o valor que foi preenchido no campo já foi retornado do endpoint.
     * @param {*} value Valor preenchido no campo
     */
    hasBackupList(value) {
      let itemsFiltered = [];
      if (this.listBackup) {
        for (const item of this.field.search.searchField) {
          itemsFiltered = [...this.listBackup].filter(filtered => {
            const parsedItem = JSON.parse(filtered);
            return parsedItem[item.id].toString().includes(value);
          });
          if (itemsFiltered.length > 0) {
            break;
          }
        }
      }

      return itemsFiltered.length > 0;
    },

    /**
     * Faz uma busca no endpoint de todos os registros que se encaixem dentro do filtro. O filtro é construído a partir do valor que é preenchido no campo e todos os campos que foram definidos na props "field.search.searchField". Com o retorno do endpoint é construída uma lista (Set) que é definida no "datalist" do input.
     * @param {*} value Valor preenchido no campo
     */
    async autoCompleteSearchValue(value) {
      const search = this.field.search;
      if (search.service) {
        let list = new Set();

        if (!this.hasBackupList(value)) {
          for (const field of search.searchField) {
            const filter = this.createFilter(value, field);
            if (filter != "") {
              await search.service.getAll(filter).then(response => {
                response.data.forEach(item => list.add(JSON.stringify(item)));
              });
            }
            this.listBackup = list;
          }
        } else {
          list = this.listBackup;
        }

        this.defineAutoCompleteList(list, search.displayField);
      }
    },

    /**
     * É chamado um callback (props field.format) que irá formatar o valor que é preenchido no campo.
     * @param {*} value Valor preenchido no campo
     */
    formatterValue(value) {
      let formattedValue = value;
      if (this.field.format) {
        this.$nextTick().then(() => {
          formattedValue = this.field.format(value);
          this.model[this.field.modelName] = formattedValue;
        });
      }
      return formattedValue;
    },

    onInput(value) {
      const formattedValue = this.formatterValue(value);

      this.autoCompleteList = [];
      if (this.field.search && formattedValue) {
        this.debouncedSearch(formattedValue);
      }
    }
  },

  created() {
    // eslint-disable-next-line
    this.debouncedSearch = _.debounce(this.autoCompleteSearchValue, 500);
  },

  data() {
    return {
      autoCompleteList: [],
      autoCompleteListBackup: [],
      listBackup: null
    };
  }
};
