import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFlag } from '@fortawesome/free-solid-svg-icons'

library.add(faFlag)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
