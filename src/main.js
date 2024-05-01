import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './routes/index'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

createApp(App)
  .use(router)
  .use(
    Vue3Toasity,
    {
      autoClose: 3000,
      pauseOnFocusLoss: false,
      theme: 'dark'
    }
  )
  .mount('#app')
