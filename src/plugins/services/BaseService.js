import Axios from "axios";
import ErrorHandler from "./logger/ErrorHandler";

export default class BaseService {
  constructor(resouceName) {
    this.RESOURCE_NAME = resouceName;
  }

  async request(AxiosRequestConfig) {
    return await Axios.request(AxiosRequestConfig)
      .then(response => {
        return response;
      })
      .catch(error => {
        ErrorHandler.showError(error);
        return Promise.reject(error);
      });
  }

  async getAll(filter = "") {
    return await this.request({
      method: "get",
      url: `${this.RESOURCE_NAME}${filter}`
    });
  }

  async get(id) {
    return await this.request({
      method: "get",
      url: `${this.RESOURCE_NAME}/${id}`
    });
  }

  async create(data) {
    return await this.request({
      method: "post",
      url: this.RESOURCE_NAME,
      data: data.toDTO()
    });
  }

  async update(data) {
    return await this.request({
      method: "put",
      url: `${this.RESOURCE_NAME}/${data.getId()}`,
      data: data.toDTO()
    });
  }

  async delete(data) {
    return await this.request({
      method: "delete",
      url: `${this.RESOURCE_NAME}/${data.id}`,
      data: { _v: data.etag }
    });
  }
}
