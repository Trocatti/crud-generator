import { DateTime } from "luxon";

export default {
  name: "c-footer",
  methods: {
    calcResize() {
      const { clientHeight } = document.documentElement;
      const topOffset = 55;
      const height =
        (clientHeight > 0 ? clientHeight : window.screen.height) - 1;
      let newHeight = height - topOffset;

      if (height < 1) newHeight = 1;
      if (height > topOffset) {
        const wrapper = document.querySelector(".page-wrapper");
        wrapper.style.minHeight = `${newHeight}px`;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.calcResize);
      this.calcResize();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calcResize);
  },
  computed: {
    date() {
      return DateTime.local().toFormat("yyyy");
    }
  }
};
