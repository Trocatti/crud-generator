import BaseBehaviour from "@/plugins/domain/BaseBehaviour";
import ParametroService from "@/services/ParametroService";

export default class Parametro extends BaseBehaviour {
  constructor(model) {
    super(ParametroService, model);
  }

  toDTO() {
    return super.toDTO();
  }
}
