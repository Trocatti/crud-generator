import { mapState } from "vuex";

import Icon from "vue-awesome/components/Icon.vue";

import "vue-awesome/icons/cloud";
import "vue-awesome/icons/list";
import "vue-awesome/icons/regular/calendar-alt";
import "vue-awesome/icons/users";
import "vue-awesome/icons/download";
import "vue-awesome/icons/paste";
import "vue-awesome/icons/database";
import "vue-awesome/icons/signal";
import "vue-awesome/icons/file-contract";
import "vue-awesome/icons/cog";

import Vue from "vue";
import Vuebar from "vuebar";
import { BCollapse, VBToggle } from "bootstrap-vue";

import applications from "./applications";

Vue.use(Vuebar);

let appObserver = {};

export default {
  name: "c-sidebar",
  components: {
    BCollapse,
    "v-icon": Icon
  },
  directives: {
    "b-toggle": VBToggle
  },
  computed: {
    ...mapState({
      sideBar: state => state.pluginStore.sideBar
    }),
    applications: () => applications
  },
  methods: {
    //Este método irá abrir (ou fechar, baseado no parâmetro "show") todos os itens(li) do menu(navbar)
    showAllMenus(show, exception) {
      this.sideBar.topics.forEach(topic => {
        if (!exception || exception != topic.name) {
          this.$refs[topic.name][0].show = show;
        }
      });

      if (!exception || exception != "apps") {
        this.$refs["apps"].show = show;
      }
    },

    // Este método irá colorir o fundo do item(li) selecionado no menu(navbar)
    drawBackgroundTopic() {
      const el = `a.has-arrow[aria-controls="${this.storageCollapse}"]`;
      document.querySelector(el)?.classList.add("activeCollapse");
    },

    visibilityCollapse(name) {
      return this.isMiniSideBar || this.storageCollapse === name;
    },

    //Este método irá salvar o último item(li) selecionado no menu(navbar), para que o mesmo possa ser colorido e caso o usuário altere para a mini-sidebar e volte para o padrão normal, o último menu aberto fique aberto novamente.
    saveCollapseId(target, name) {
      if (!this.isMiniSideBar) {
        const collapsed = target.classList.contains("collapsed");

        if (!collapsed) {
          this.storageCollapse = name;
          this.showAllMenus(false, name);
          this.drawBackgroundTopic();
        } else {
          this.storageCollapse = "";
        }
      } else {
        //Caso seja mini-sidebar e o usuário tente clicar para fechar o menu, será alterado (toggle) para aberto novamente.
        this.$root.$emit("bv::toggle::collapse", name);
      }
    },

    calcResize() {
      const { clientWidth } = document.documentElement;
      const width = clientWidth > 0 ? clientWidth : window.screen.width;

      const miniSidebar = "mini-sidebar";
      const container = document.querySelector(".fixed-layout");

      if (width < 1170 && !container.classList.contains(miniSidebar)) {
        container.classList.add(miniSidebar);
      } else {
        container.classList.remove(miniSidebar);
      }
    }
  },

  mounted() {
    //Este observador ficará analisando se a página está entrando em modo mini-sidebar
    appObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === "class") {
          this.isMiniSideBar = mutation.target.classList.contains(
            "mini-sidebar"
          );

          // Caso seja mini-sidebar, será removida a classe "activeCollapse"(que colore quando um item é selecionado) de todos os itens, menos o item selecionado por último
          if (this.isMiniSideBar) {
            this.$nextTick(() => {
              document.querySelectorAll(`a.has-arrow`).forEach(element => {
                if (
                  element.attributes["aria-controls"].nodeValue !=
                  this.storageCollapse
                ) {
                  element.classList.remove("activeCollapse");
                }

                //Abre todos menus
                this.showAllMenus(true);
              });
            });
          } else {
            //Caso não seja mini-sidebar, será fechado todos os menus, menos o último selecionado
            this.showAllMenus(false, this.storageCollapse);
          }
        }
      });
    });

    appObserver.observe(document.querySelector("#app"), {
      attributes: true
    });

    this.$nextTick(() => {
      window.addEventListener("resize", this.calcResize);
      this.calcResize();
      this.showAllMenus(true);
      this.drawBackgroundTopic();
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.calcResize);
    appObserver.disconnect();
  },

  data() {
    return {
      storageCollapse: "Home",
      isMiniSideBar: false
    };
  }
};
