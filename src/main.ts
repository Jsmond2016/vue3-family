import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import 'amfe-flexible/index.js'


createApp(App).use(Vant).use(store).use(router).mount("#app");
