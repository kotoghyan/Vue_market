import {setApiData} from "@/api/api";
import {defaultData} from "@/defaultData/defaultData";
import {filterStateForLocalStorage, removeSaveOptAndDataInStorage} from "@/utils/hellpers";

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
        SET_NEW_ITEM(state, payload) {
            state.dataList.push(payload)
            removeSaveOptAndDataInStorage(state)
            console.log(state)
        }
    },
    actions: {
        setNewItem({commit}, obj) {
            commit('SET_NEW_ITEM', {...defaultData, ...obj});
        },
        async searchItem({commit}, symbol) {
            const response = await setApiData.setSearchItem({symbol: symbol});
            if (response.status < 400) {
                const findFromStorage = JSON.parse(localStorage.getItem(`options`)).find(el => el.symbol === symbol)
                if (findFromStorage){
                    commit('SET_ITEM_SEARCH', findFromStorage);
                }else {
                    commit('SET_ITEM_SEARCH', {...response.data[0]});
                }

            } else {
                console.log(response.code);
            }
        },
        async optionsFetch({commit}, symbol) {
            const response = await setApiData.setOptions(symbol)
            if (response.status < 400) {
                console.log(1)
                commit('SET_DATA', response.data);
            } else {
                console.log(response.code);
            }
        },
        async fetchData({commit}) {
            const response = await setApiData.setDefaultData()
            if (response.status < 400) {
                if (JSON.parse(localStorage.getItem('dataList')) || JSON.parse(localStorage.getItem('options'))) {
                    commit('SET_DATA', response.data.concat(filterStateForLocalStorage('dataList', response)));
                    commit('SET_SELECTED_SYMBOL', response.data.concat(filterStateForLocalStorage('options', response)));
                } else {
                    commit('SET_DATA', response.data)
                    commit('SET_SELECTED_SYMBOL', response.data)
                }

            } else {
                console.log(response.code);
            }
        }
    },
}