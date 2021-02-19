import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
import './assets/css/reset.css'//重置样式
import './assets/css/common.css'
import './util/rem'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
