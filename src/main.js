import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarker, faPhone, faEnvelope, faClock, faBus } from '@fortawesome/free-solid-svg-icons'

library.add(
  faMapMarker,
  faPhone,
  faEnvelope,
  faClock,
  faBus
)

// library.add(fas)


Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
