import Vue from 'vue'
import App from './App.vue'
import VueSimpleSVG from 'vue-simple-svg'
import { store } from './store/store'
import vuewheel from 'vuewheel'
import inView from './directives/in-view'
import resize from 'vue-resize-directive'
import { auth } from './firebase'

Vue.use(VueSimpleSVG)
Vue.use(vuewheel)
Vue.directive('in-view', inView)
Vue.directive('resize', resize)

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
/*
new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')
*/
