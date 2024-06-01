import './assets/main.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from "./stores/favorite";


const app = createApp(App)
app.use(createPinia());
app.use(router).use(store).use(PrimeVue);

app.mount('#app')
