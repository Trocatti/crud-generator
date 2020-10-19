export default new (class CrudTypes {
  constructor() {
    this.CREATE = "CREATE";
    this.FILTER = "FILTER";
    this.EDIT = "EDIT";
    Object.freeze(this);
  }
})();
