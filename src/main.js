import { createApp } from 'vue'
import './style.css'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import { Message } from '@arco-design/web-vue';

const app = createApp(App);
Message._context = app._context;
app.use(ArcoVue);
app.mount('#app');
