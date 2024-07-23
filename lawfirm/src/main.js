import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'  // Ensure this line is present
import 'vue3-carousel/dist/carousel.css'  // Import vue3-carousel CSS if needed

const app = createApp(App)
app.use(router)
app.mount('#app')