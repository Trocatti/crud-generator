import { DateTime } from "luxon";

export default {
  methods: {
    translateEnumValue(theEnum, value = null) {
      return value && value > -1
        ? theEnum.filter(item => item.value === value).shift()?.text
        : "";
    },
    formatDateForTable(value) {
      const splittedDate = value.split("-");
      const year = parseInt(splittedDate[0], 10);
      const month = parseInt(splittedDate[1], 10);
      const day = parseInt(splittedDate[2], 10);
      return DateTime.local(year, month, day).toLocaleString();
    },
    copyObject(object) {
      return JSON.parse(JSON.stringify(object));
    },
    objectEquals(source, target) {
      return (
        JSON.stringify(source, this.replacer) ===
        JSON.stringify(target, this.replacer)
      );
    },
    replacer(key, value) {
      if (typeof value === "number") {
        return value.toString();
      } else {
        return value;
      }
    },
    createFilterBasedOnModel(model) {
      const filter = Object.keys(model)
        .filter(key => model[key] != null)
        .map(field => `${field}=${encodeURI(model[field])}`)
        .join("&");
      return "?".concat(filter);
    }
  }
};
