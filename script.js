import Toast from "./Toast.js";

document.querySelector("button").addEventListener("click", () => {
  new Toast({
    autoClose: false,
  });
  new Toast({
    toastContent: {
      message: "Info",
      title: "Something's not right",
      type: "info",
    },
    autoClose: false,
    position: "top-center",
  });
  new Toast({
    toastContent: {
      message: "Info",
      title: "Something's not right",
      type: "success",
    },
    autoClose: false,
    position: "top-left",
  });
  new Toast({
    toastContent: {
      message: "Info",
      title: "Something's not right",
      type: "error",
    },
    autoClose: false,
    position: "bottom-left",
  });
  new Toast({
    toastContent: {
      message: "Info",
      title: "Something's not right",
      type: "warning",
    },
    autoClose: false,
    position: "bottom-center",
  });
  new Toast({
    toastContent: {
      message: "Info",
      title: "Something's not right",
      type: "warning",
    },
    autoClose: false,
    position: "bottom-right",
  });
});
