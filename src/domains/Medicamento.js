import BaseBehaviour from "@/plugins/domain/BaseBehaviour";
import MedicamentoService from "@/services/MedicamentoService";

export default class Medicamento extends BaseBehaviour {
  constructor(model) {
    super(MedicamentoService, model);
  }

  toDTO() {
    return super.toDTO(["codigo", "quantidade"]);
  }
}
