import "reset-css"
import "@/assets/css/fonts.css"
import "@/assets/css/common.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import {faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'
import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from './App.vue'
import router from './router'


const app = createApp(App)



library.add(faArrowDown,faInstagram,faGithub);




app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')

