import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


// Determinar la URL base en función del hostname
const productionBaseURL = import.meta.env.VITE_productionBaseURL || window.location.origin
const localBaseURL = import.meta.env.VITE_localBaseURL
axios.defaults.baseURL = window.location.hostname === 'localhost' ? localBaseURL : productionBaseURL

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(VueSweetalert2)
