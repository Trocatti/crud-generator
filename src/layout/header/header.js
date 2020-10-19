import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/regular/envelope";
import "vue-awesome/icons/bars";
import "vue-awesome/icons/angle-down";
import "vue-awesome/icons/regular/user";
import "vue-awesome/icons/sign-out-alt";

import { BForm, BFormInput } from "bootstrap-vue";

import { mapState } from "vuex";

export default {
  name: "c-header",
  components: {
    BForm,
    BFormInput,
    "v-icon": Icon
  },
  computed: {
    ...mapState({
      showSidebar: state => state.pluginStore.sideBar.show
    })
  },
  methods: {
    onSubmitSearch() {},
    miniSidebar() {
      const miniSidebar = "mini-sidebar";
      const container = document.querySelector(".fixed-layout");
      if (!container.classList.contains(miniSidebar)) {
        container.classList.add(miniSidebar);
      } else {
        container.classList.remove(miniSidebar);
      }
    },
    actionProfile() {
      const show = "show";
      const navItem = document.querySelector(".nav-item.dropdown");
      const container = document.querySelector(".dropdown-menu");
      if (container.classList.contains(show)) {
        container.classList.remove(show);
        navItem.classList.remove(show);
      } else {
        container.classList.add(show);
        navItem.classList.add(show);
      }
    }
  },
  data() {
    return {
      portal: process.env.VUE_APP_PORTAL,
      form: {
        search: ""
      },
      profile: {
        user: "Pedro",
        img:
          "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg",
        itens: [
          { icon: "regular/user", name: "Meu perfil", link: "404" },
          { icon: "regular/envelope", name: "Caixa de entrada", link: "404" },
          { icon: "sign-out-alt", name: "Sair", link: "login" }
        ]
      }
    };
  }
};
