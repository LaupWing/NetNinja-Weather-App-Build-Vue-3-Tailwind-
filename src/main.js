import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSun} from '@fortawesome/free-solid-svg-icons'

library.add(faSun)

import './assets/index.css'

const app = createApp(App)
   .component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
