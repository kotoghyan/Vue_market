import {createRouter,  createWebHashHistory } from "vue-router";
import MainBody from "../components/MainBody/MainBody";
import ItemPage from "@/components/Pages/itemPages/ItemPage";


export const router = createRouter({
    history:createWebHashHistory(),
    routes : [
        { path: `/main`, component: MainBody, alias:'/' },
        { path: `/companyname/:symbol`, component: ItemPage },
    ]
})