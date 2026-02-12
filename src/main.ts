import { createApp } from 'vue'
import '@/styles/base.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// Создаем экземпляр Pinia
const pinia = createPinia()

createApp(App)
	.use(pinia)
	.mount('#app')
