import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import "normalize.css"
import "@/assets/font/iconfont.css"
import "@/styles/common.css"
import "@/styles/var.css"

createApp(App).use(router).mount('#app')
