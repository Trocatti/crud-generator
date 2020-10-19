import BaseService from "../../../../../plugins/services/BaseService";

const RESOURCE_NAME = "/serviceTest";

export default class ServiceTest extends BaseService {
  constructor() {
    super(RESOURCE_NAME);
  }
}
