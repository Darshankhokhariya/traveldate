import { toast } from "react-hot-toast";

export const showToast = (message, options = {}) => {
  options.duration = 2000;
  toast(message, options);
};
