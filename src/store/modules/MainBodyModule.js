import {setApiData} from "@/api/api";

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
        },
    },
    actions: {
        async searchItem({commit}, symbol) {
            const response = await setApiData.setSearchItem(symbol)

            if (response.status < 400) {
                commit('SET_ITEM_SEARCH', {...response.data[0]});
            } else {
                console.log(response.code);
            }
        },
        async optionsFetch({commit}, symbol) {
            const response = await setApiData.setOptions(symbol)

            if (response.status < 400) {
                commit('SET_DATA', response.data);
            } else {
                console.log(response.code);
            }
        },
        async fetchData({commit}) {
            const response = await setApiData.setDefaultData()

            if (response.status < 400) {
                commit('SET_DATA', response.data);
                commit('SET_SELECTED_SYMBOL', response.data);
            } else {
                console.log(response.code);
            }
        },
    },
}