import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {
          eventBus: this.eventBus,
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = (props) => vueLifecycles.mount(props);
export const unmount = vueLifecycles.unmount;
