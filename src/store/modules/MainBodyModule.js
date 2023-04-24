import {setApiData} from "@/api/api";
import {defaultData} from "@/defaultData/defaultData";
import {filterStateForLocalStorage, getItemFromLocalsStorage, removeSaveOptAndDataInStorage} from "@/utils/hellpers";

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
        }
    },
    actions: {
        setNewItem({commit}, obj) {
            commit('SET_NEW_ITEM', {...defaultData, ...obj});
        },
        async searchItem({commit}, symbol) {
            const response = await setApiData.setSearchItem({symbol: symbol});
            if (response.status < 400) {
                const findFromStorage = getItemFromLocalsStorage(`options`);
                if (findFromStorage){
                    let item = findFromStorage.find(el => el.symbol === symbol)
                    commit('SET_ITEM_SEARCH', item);
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
                const find = getItemFromLocalsStorage(`options`);
                if (find) {
                    let item = find.find(el => el.symbol === symbol.symbol);
                    console.log(2)
                    commit('SET_DATA', [item]);
                } else {
                    console.log(1)
                    commit('SET_DATA', response.data);
                }
            } else {
                console.log(response.code);
            }
        },
        async fetchData({commit}) {
            const response = await setApiData.setDefaultData()
            if (response.status < 400) {
                if (getItemFromLocalsStorage('dataList') && getItemFromLocalsStorage('options')) {
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