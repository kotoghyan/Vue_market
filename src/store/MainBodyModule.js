import axios from "axios";
import {defaultSelector, searchSelector} from "@/store/hellpers";

export default {
    namespaced: true,
    state: {
        dataList: null,
        options: null,
        itemSearch: null
    },
    getters: {
        dataList: state => state.dataList,
        options: state => state.options,
        itemSearch: state => state.itemSearch,
    },
    mutations: {
        SET_DATA(state, payload) {
            state.dataList = payload;
        },
        SET_SELECTED_SYMBOL(state, payload) {
            state.options = payload;
        },
        SET_ITEM_SEARCH(state, payload) {
            state.itemSearch = payload;
            console.log(state, ' setitem serch')
        },
    },
    actions: {
        searchItem({commit}, symbol) {
            console.log(symbol, 'symbol');
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${searchSelector(symbol)}?apikey=c885b15df56dafb35cc6e49ccd5538a1`)
                .then(response => {
                    commit('SET_ITEM_SEARCH', {...response.data[0]});

                })
                .catch(error => {
                    console.error(error);
                });
        },
        optionsFetch({commit}, symbol) {
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${searchSelector(symbol)}?apikey=c885b15df56dafb35cc6e49ccd5538a1`)
                .then(response => {
                    commit('SET_DATA', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchData({commit}) {
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${defaultSelector()}?apikey=c885b15df56dafb35cc6e49ccd5538a1`)
                .then(response => {
                    commit('SET_DATA', response.data);
                    commit('SET_SELECTED_SYMBOL', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
}