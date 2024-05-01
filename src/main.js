import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './routes/index'

createApp(App)
  .use(router)
  .mount('#app')
