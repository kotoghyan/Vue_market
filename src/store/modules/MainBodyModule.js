import {setApiData} from "@/api/api";
import {defaultData} from "@/defaultData/defaultData";

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
            console.log(state, 'set data mutation')
        },
        SET_SELECTED_SYMBOL(state, payload) {
            state.options = payload;
        },
        SET_ITEM_SEARCH(state, payload) {
            state.itemSearch = payload;
        },
        SET_NEW_ITEM(state, payload) {
            console.log(payload)
            state.dataList.push(payload)
            state.options.push(payload)
            state.itemSearch = payload
            console.log(state, 'new Item')
        }
    },
    actions: {
        setNewItem({commit}, obj) {
            commit('SET_NEW_ITEM', {...defaultData, ...obj});
        },
        async searchItem({commit}, symbol) {
            const response = await setApiData.setSearchItem({symbol: symbol});
            console.log('item')
            if (response.status < 400) {
                commit('SET_ITEM_SEARCH', {...response.data[0]});
            } else {
                console.log(response.code);
            }
        },
        async optionsFetch({commit}, symbol) {
            const response = await setApiData.setOptions(symbol)
            console.log('options')
            if (response.status < 400) {
                commit('SET_DATA', response.data);
            } else {
                console.log(response.code);
            }
        },
        async fetchData({commit}) {
            const response = await setApiData.setDefaultData()
            console.log('data')
            if (response.status < 400) {
                commit('SET_DATA', response.data);
                commit('SET_SELECTED_SYMBOL', response.data);
            } else {
                console.log(response.code);
            }
        },
    },
}