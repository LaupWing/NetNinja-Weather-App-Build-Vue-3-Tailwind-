import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSun, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

library.add(faSun)
library.add(faCircleInfo)

import './assets/index.css'

const app = createApp(App)
   .component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
