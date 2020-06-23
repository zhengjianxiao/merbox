import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Overlay } from 'vant';
import { Button } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';
import { Picker } from 'vant';
import {popup} from 'vant';
import { Icon } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Icon);
Vue.use(popup);
Vue.use(Picker);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Overlay);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
