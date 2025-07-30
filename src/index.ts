import type { Plugin } from "vue"
import { Toasted } from './js/toast';
import ToastComponent from "./toast.vue";
let toastInstance: any = null;

const ToastedPlugin: Plugin = {
    install(app, options) {
        toastInstance = new Toasted(options ?? {});

        app.component('toasted', ToastComponent as any);

        app.config.globalProperties.toasted = toastInstance;
        app.config.globalProperties.$toasted = toastInstance;
    }
};

export const useToasted = () => toastInstance

export default ToastedPlugin
