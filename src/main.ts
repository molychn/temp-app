import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import IconBox from './components/Icon.vue'

import '@purge-icons/generated'

const pinia = createPinia()
const app = createApp(App)

app.component('IconBox', IconBox)

app.use(pinia)
app.mount('#app')
