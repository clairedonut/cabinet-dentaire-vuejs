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


// Global variables

Vue.prototype.$branding = 'Cabinet Dentaire'
Vue.prototype.$address = '3, rue de la rue - 59000 Lille'
Vue.prototype.$phone = '03 23 32 21 22'
Vue.prototype.$email = 'hello@dentist.com'






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
