import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'

import '@/assets/css/base.scss'

fastclick.attach(document.body)

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
