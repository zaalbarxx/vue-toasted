import { Plugin } from "vue"
import { Toasted as T } from './js/toast';
import ToastComponent from './toast.vue';

let toastInstance: any = null 

const Toasted: Plugin = {
    install(app, options) {
        toastInstance = new T(options ?? {});

        app.component('toasted', ToastComponent as any);

        app.config.globalProperties.toasted = toastInstance;
        app.config.globalProperties.$toasted = toastInstance;
    }
};

export const useToasted = () => toastInstance

export default Toasted
