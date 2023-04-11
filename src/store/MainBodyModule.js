import axios from "axios";

export default {
    namespaced: true,
    state: {
        data: [],
    },
    getters: {
        data: state => state.data
    },
    mutations: {
        SET_DATA(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        fetchData({commit}) {
            axios.get('https://api.asindataapi.com/request?api_key=demo&type=search&amazon_domain=amazon.com&search_term=highlighter+pens')
                .then(response => {
                    console.log(response.data.search_results, 'seaer')
                     commit('SET_DATA', response.data.search_results);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
}