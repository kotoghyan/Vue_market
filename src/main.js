import { createApp } from 'vue'
import App from './App.vue'
import index from './store/index'


const app = createApp(App);
app.use(index);
app.mount('#app');