import Vue from 'vue'

import ViewUI from 'view-design';
// import './cup-theme/index.less';
import 'view-design/dist/styles/iview.css';

import App from './App.vue'

// Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
