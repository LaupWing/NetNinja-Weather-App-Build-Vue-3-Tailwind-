import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import './assets/index.css'

const app = createApp(App)
   .component("font-awesome-ion", FontAwesomeIcon)

app.use(router)

app.mount('#app')
