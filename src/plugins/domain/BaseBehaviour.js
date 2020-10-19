import mixinBehaviour from "../mixinBehaviour";

const defaultKeys = ["_id", "criador", "dataCriacao", "checked"];
const selfMixin = mixinBehaviour.methods;

export default class BaseBehaviour {
  constructor(Service, model) {
    this.service = new Service();
    this.model = model || {};
  }

  toDTO(keysToConvert) {
    let localModel = selfMixin.copyObject(this.model);
    localModel = this.removeDefaultKeys(localModel);
    localModel = this.convertKeys(localModel, keysToConvert);
    return localModel;
  }

  updateModel(model) {
    Object.keys(model).forEach(key =>
      Object.defineProperty(this.model, key, {
        value: model[key],
        writable: true,
        enumerable: true,
        configurable: true
      })
    );
  }

  incrementTag() {
    Object.defineProperty(this.model, "_v", { value: this.model["_v"] + 1 });
  }

  toModel() {
    return this.model;
  }

  convertKeys(model, keysToConvert) {
    const localModel = selfMixin.copyObject(model);
    if (keysToConvert) {
      keysToConvert.forEach(key => {
        localModel[key] = parseFloat(localModel[key]);
      });
    }
    return localModel;
  }

  removeDefaultKeys(model) {
    const localModel = selfMixin.copyObject(model);
    defaultKeys.forEach(key => {
      delete localModel[key];
    });
    return localModel;
  }

  equals(model) {
    return selfMixin.objectEquals(this.model, model);
  }

  getService() {
    return Object.freeze(this.service);
  }

  getId() {
    return this.toModel()._id;
  }

  create(model) {
    if (model) {
      this.updateModel(model);
    }
    return this.service.create(this);
  }
}
