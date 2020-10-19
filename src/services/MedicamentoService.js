import BaseService from "@/plugins/services/BaseService";

const RESOURCE_NAME = "/medicamentos";

export default class MedicamentoService extends BaseService {
  constructor() {
    super(RESOURCE_NAME);
  }
}
