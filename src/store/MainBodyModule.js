import axios from "axios";
import {defaultSelector, searchSelector} from "@/store/apiRequestSerch";

export default {
    namespaced: true,
    state: {
        dataList: [],
        options: [],
    },
    getters: {
        data: state => state.dataList,
        options: state => state.options,
    },
    mutations: {
        SET_DATA(state, payload) {
            state.dataList = payload;
        },
        SET_SELECTED_SYMBOL(state, payload) {
            state.options = payload;
        },
    },
    actions: {
        setSelectedSymbol({commit}, symbol) {
            commit('SET_SELECTED_SYMBOL', symbol)
        },
        optionsFetch({commit},symbol){
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${searchSelector(symbol)}?apikey=83efd584d942e3923c09ade3025e4da3`)
                .then(response => {
                    console.log(this.state.main, 'options')
                    console.log(response.data, 'options_data')
                    commit('SET_DATA', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchData({commit}, selector) {
            console.log(selector, 'fetchDataList')
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${defaultSelector()}?apikey=83efd584d942e3923c09ade3025e4da3`)
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