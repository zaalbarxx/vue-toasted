import { createApp } from 'vue'
import Toasted from '../src/index'
import App from './App.vue'

import "../src/sass/toast.scss"

const app = createApp(App as any)
app.use(Toasted)
app.mount('#app')