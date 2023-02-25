import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BlockListRenderer from "./dd/BlockListRenderer.vue"

const  app = createApp(App)

app.component('BlockListRenderer', BlockListRenderer)

app.use(router).mount('#app')
