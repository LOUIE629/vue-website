import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import axios from './http'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'



const app = createApp(App)

//全局挂载axios
app.config.globalProperties.$axios = axios;

//自动附加在所有axios请求前面，则可以省略/api，直接写'/xxxx/xxx'。否则需要设置'/api/xxxx/xxx'
// axios.defaults.baseURL = '/api/'

for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}

app.use(ElementPlus)
app.use(store)
app.use(router)

app.mount('#app')

