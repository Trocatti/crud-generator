import Swal from "sweetalert2";

export default class Alerts {
  static showError(messages) {
    Swal.fire({
      title: messages.title,
      text: messages.text,
      type: "error",
      customClass: {
        title: "h4",
        popup: "font-12"
      }
    });
  }

  static showConfirm(messages, fnCallBack) {
    Swal.fire({
      title: messages.question.title,
      text: messages.question.text,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonText: "Fechar",
      confirmButtonText: "Sim",
      reverseButtons: true,
      customClass: {
        title: "h4",
        popup: "font-12"
      }
    }).then(result => {
      if (result.value) {
        fnCallBack().then(() => {
          if (messages.success) {
            Swal.fire({
              title: messages.success.title,
              text: messages.success.text,
              type: "success",
              customClass: {
                title: "h4",
                popup: "font-12"
              }
            });
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        if (messages.cancel) {
          Swal.fire({
            title: messages.cancel.title,
            text: messages.cancel.text,
            type: "error",
            customClass: {
              title: "h4",
              popup: "font-12"
            }
          });
        }
      }
    });
  }
}
