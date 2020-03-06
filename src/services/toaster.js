import { Toast } from "native-base";
const _show = config => {
  Toast.show({
    duration: 3000,
    position: "bottom",
    ...config
  });
};

export const Toaster = {
  show: config => _show(config),
  success: message => {
    _show({
      text: message,
      type: "success"
    });
  },
  info: message => {
    _show({
      text: message,
      type: "default"
    });
  },
  warning: message => {
    _show({
      text: message,
      type: "warning"
    });
  },

  danger: message => {
    _show({
      text: message,
      type: "danger"
    });
  },
  error: message => {
    _show({
      text: message,
      type: "danger"
    });
  }
};
