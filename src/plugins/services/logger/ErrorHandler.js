import Alerts from "../../defaultAlerts";
import { messages } from "./messages";

export default class ErrorHandler {
  static showError(error) {
    const method = error.config.method;
    const message = error.response ? error.response.data : error.message;
    Alerts.showError({
      title: messages[method],
      text: `Informações técnicas: ${message}`
    });
  }
}
