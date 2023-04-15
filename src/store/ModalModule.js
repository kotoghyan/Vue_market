export default {
    namespaced: true,
    state: {
        itemCondition: {
            fromPage:true,
            fromModal:false,
        },
        modalItemList: [],
    },
    getters:{
        itemCondition: state => state.itemCondition,
        modalItemList: state => state.modalItemList,
    },
    mutations: {
        SET_ITEM(state, payload) {
            state.modalItemList = payload
        },
        SET_CONDITION(state) {
            let page = state.itemCondition.fromPage;
            let modal = state.itemCondition.fromModal;
            if(page) {
                modal = true;
                page = false;
            }
            modal = false;
            page = true;
        }
    },
    actions: {
        setItem({commit}, payload){
            commit('SET_ITEM', payload)
        },
        setCondition({commit}){
            commit('SET_CONDITION')
        }
    }


}