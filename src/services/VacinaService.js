import BaseService from "@/plugins/services/BaseService";

const RESOURCE_NAME = "/vacinas";

export default class VacinaService extends BaseService {
  constructor() {
    super(RESOURCE_NAME);
  }
}
