import Toast from "./Toast.js";

document.querySelector("button").addEventListener("click", () => {
  new Toast({
    toastContent: {
      message: "Info",
      title: "Something's not right",
      type: "success",
    },
    position: "bottom-right",
    playNotificationSound: true,
  });
});
