import {createStore} from "vuex";
// import {itemData} from "@/API/api";
import axios from "axios";




const index = createStore({
    state: {
        data: [],
    },
    mutations: {
        SET_USERS(state, payload) {
            state.data = payload;
        },
    },
    actions: { 
        fetchData({ commit }) {
            axios.get('https://api.asindataapi.com/request?api_key=demo&type=search&amazon_domain=amazon.com&search_term=highlighter+pens')
                .then(response => {
                    console.log(response.data.search_results)
                    commit('SET_USERS', response.data.search_results);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
})


export default index