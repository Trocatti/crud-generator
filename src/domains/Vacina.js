import BaseBehaviour from "@/plugins/domain/BaseBehaviour";
import VacinaService from "@/services/VacinaService";

export default class Vacina extends BaseBehaviour {
  constructor(model) {
    super(VacinaService, model);
  }

  toDTO() {
    return super.toDTO(["codigo", "quantidade"]);
  }
}
