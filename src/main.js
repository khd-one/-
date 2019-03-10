import Vue from 'vue'
import App from './App.vue'

//导入饿了吗UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.config.productionTip = false


//导入router
import router  from './components/libs/ruter'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
