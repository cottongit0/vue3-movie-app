import { createApp } from "vue";
import App from "./App";
import router from "./routes";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");

// use : 프로젝트의 특정한 플러그인을 연결할 때 사용한다.
