import { createApp } from 'vue'
import App from './App.vue'
import index from './store/index'
import router from "@/router/router";


const app = createApp(App);
app.use(index);
app.use(router)
app.mount('#app');