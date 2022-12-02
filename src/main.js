import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from "@/router";
import store from '@/store'

import axios from 'axios';
axios.defaults.baseURL = '/api'

const app = createApp(App);

app.use(Antd).use(router).use(store).mount('#app');
