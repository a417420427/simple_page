const state = {
    isLogin: false,
    username: ''
}

const mutations = {
    setLoginStatus(state, status) {
        state.isLogin = status
    },
    setUsername(state, username) {
        state.username = username
    }
}

export default {
    namespaced: true,
    state,
    mutations
}