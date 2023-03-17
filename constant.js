const ACCEPTED_TOAST_POSITIONS = {
  "top-left": "top-left",
  "top-right": "top-right",
  "bottom-left": "bottom-left",
  "bottom-right": "bottom-right",
  "top-center": "top-center",
  "bottom-center": "bottom-center",
};

const ACCEPTED_TOAST_TYPES = {
  info: "info",
  warning: "warning",
  error: "error",
  success: "success",
  default: "default",
};

const toastTypeColorCodeMap = {
  default: "#2196F3",
  info: "#2196F3",
  warning: "#FFDA6B",
  success: "#32BEA6",
  error: "#FF3055",
};

const DEFAULT_CONFIG = {
  autoClose: 5000,
  canCloseOnClick: true,
  onClose: () => {},
  position: ACCEPTED_TOAST_POSITIONS["top-right"],
  showProgressBar: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  toastContent: {
    message: "Toast title",
    title: "Toast message",
    type: ACCEPTED_TOAST_TYPES.default,
  },
};

export {
  ACCEPTED_TOAST_POSITIONS,
  ACCEPTED_TOAST_TYPES,
  toastTypeColorCodeMap,
  DEFAULT_CONFIG,
};
