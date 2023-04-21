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
            state.isOpen = !state.isOpen;
        },
        SET_ITEM(state, payload) {
            if (payload.length > 0) {
                state.modalItemList = payload;
            } else {
                state.modalItemList.push(payload);
            }
        },
        DELETE_ITEM(state, payload) {
            state.modalItemList = state.modalItemList.filter(el => el.symbol !== payload.symbol);
        },
    },
    actions: {
        setItem({commit}, payload) {
            let state = this.state.modal.modalItemList;
            commit('SET_ITEM', payload);
            localStorage.removeItem('modalList');
            localStorage.setItem('modalList', JSON.stringify(state));
        },
        setModal({commit}) {
            const items = JSON.parse(localStorage.getItem(`modalList`));
            if (items) {
                commit('SET_ITEM', items);
            }
            commit('SET_MODAL');
        },
        deleteItem({commit}, payload) {
            let state = this.state.modal.modalItemList;
            localStorage.setItem('modalList', JSON.stringify(state));
            commit('DELETE_ITEM', payload);
        }
    }
}