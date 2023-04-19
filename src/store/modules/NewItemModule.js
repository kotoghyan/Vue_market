export default {
    namespaced:true,
    state: {
        isOpen: false
    },
    getters: {
        condition: state => state.isOpen,
    },
    mutations: {
        SET_IS_OPEN(state) {
            state.isOpen = !state.isOpen
        }
    },
    actions: {
        setIsOpen({commit}) {
            commit('SET_IS_OPEN')
        }
    }
}