import { createApp } from 'vue'
import App from './App.vue'

const globModules = import.meta.glob("./glob/*.js")
console.log(globModules)
Object.entries(globModules).forEach(([k,v]) => {
    console.log(k+ ":" + v)
    v().then(m => console.log(k + ":" ,m.default))
})

createApp(App).mount('#app')
