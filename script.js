import Toast from "./Toast.js";

const toastForm = document.querySelector("form");

toastForm.addEventListener("submit", (event) => event.preventDefault()); // Prevent form from submitting and refreshing the page

const frameToastObject = () => {
  const formControls = toastForm.querySelectorAll("input, select, textarea");

  const formValues = {};

  for (const input of formControls) {
    if (input.type === "submit") continue;
    if (input.type === "checkbox") formValues[input.name] = input.checked;
    else if (input.type === "radio") {
      if (input.checked) formValues[input.name] = input.value;
    } else formValues[input.name] = input.value;
  }

  const { disableAutoClose, message, title, type, ...rest } = formValues;

  const toastObject = {
    ...rest,
    autoClose: !disableAutoClose && parseFloat(rest.autoClose) * 1000, //convert seconds to ms.
    toastContent: {
      message,
      title,
      type,
    },
  };

  return toastObject;
};

document.querySelector(".submit_btn").addEventListener("click", () => {
  const toastConfig = frameToastObject();
  if (!toastConfig.toastContent.title || !toastConfig.toastContent.message)
    return;
  new Toast(toastConfig);
});
