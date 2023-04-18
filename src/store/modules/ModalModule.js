export default {
    namespaced: true,
    state: {
        isOpen: false,
        modalItemList: [],
    },
    getters: {
        isOpen: state => state.isOpen,
        modalItemList: state => state.modalItemList,
    },
    mutations: {
        SET_MODAL(state) {
            state.isOpen = !state.isOpen
        },
        SET_ITEM(state, payload) {
            state.modalItemList.push(payload)
            console.log(state.modalItemList)
        },
        DELETE_ITEM(state, payload) {
            state.modalItemList = state.modalItemList.filter(el => el.symbol !== payload.symbol);
        },
    },
    actions: {
        setItem({commit}, payload) {
            commit('SET_ITEM', payload)
        },
        setModal({commit}) {
            commit('SET_MODAL')
        },
        deleteItem({commit}, payload) {
            commit('DELETE_ITEM', payload)
        }
    }
}