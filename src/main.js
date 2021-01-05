import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//axios
import axios from '@/api/http'
//需要将对应的内容挂载到vue的原型上
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
