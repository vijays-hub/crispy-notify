import { toastTypeColorCodeMap } from "./constant.js";

const getToastContent = ({ type, title, message }) => `
<div class="toast_content" style="border-left: 3px solid ${toastTypeColorCodeMap[type]}">
    <img src="assets/images/${type}.png" alt="" class="toast_type_asset" />
    <div class="toast_text">
        <h4>${title}</h4>
        <p>${message}</p>
    </div>
</div>`;

const createToastContainer = (position) => {
  const container = document.createElement("div");
  container.classList.add("toast-container");
  container.dataset.position = position; // add the position as data attribute for CSS manipulation.
  document.body.append(container); // add it to the body as it's a first element.
  return container;
};

export { createToastContainer, getToastContent };
