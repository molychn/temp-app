import { createApp } from 'vue'
import App from './App.vue'
import IconBox from './components/Icon.vue'

import '@purge-icons/generated'

const app = createApp(App)

app.component('IconBox', IconBox)

app.mount('#app')
