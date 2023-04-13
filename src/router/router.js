import {createRouter, createWebHashHistory} from "vue-router";
import MainBody from "../components/MainBody/MainBody";



export default createRouter({
    history:createWebHashHistory(),
    routes : [
        { path: '/main', component: MainBody, alias:'/' },
    ]

})