import BaseBehaviour from "@/plugins/domain/BaseBehaviour";
import ResultadoExamesService from "@/services/ResultadoExamesService";

export default class ResultadoExames extends BaseBehaviour {
  constructor(model) {
    super(ResultadoExamesService, model);
  }

  toDTO() {
    return super.toDTO(["valor", "origem", "categoria"]);
  }
}
