export default {
    addUser: ({ commit }, user) => {
        commit('appendUsers', user)
    }
}