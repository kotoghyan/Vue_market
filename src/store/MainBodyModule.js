import axios from "axios";
import {defaultSelector, searchSelector} from "@/store/apiRequestSerch";

export default {
    namespaced: true,
    state: {
        dataList: null,
        options:null,
        itemSearch: null
    },
    getters: {
        data: state => state.dataList,
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
        },
    },
    actions: {
        searchItem({commit}, symbol){
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${searchSelector(symbol)}?apikey=13b4101a0776a996190f6521a566f207`)
                .then(response => {
                    console.log(symbol, 'search Symbol')
                    console.log(response.data, 'search Item')
                    console.log(this.state.main.options, 'search')
                    commit('SET_ITEM_SEARCH', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        optionsFetch({commit}, symbol){
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${searchSelector(symbol)}?apikey=13b4101a0776a996190f6521a566f207`)
                .then(response => {
                    commit('SET_DATA', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchData({commit}) {
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${defaultSelector()}?apikey=13b4101a0776a996190f6521a566f207`)
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