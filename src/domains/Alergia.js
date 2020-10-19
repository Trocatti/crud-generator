import BaseBehaviour from "@/plugins/domain/BaseBehaviour";
import AlergiaService from "@/services/AlergiaService";

export default class Alergia extends BaseBehaviour {
  constructor(model) {
    super(AlergiaService, model);
  }

  toDTO() {
    return super.toDTO(["tipo", "status"]);
  }
}
