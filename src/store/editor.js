import axios from '../plugins/request'

const state = {
    articles: []
}

const mutations = {
    setContent(state, payload) {
        state.articles.push(payload)
    }
}
const actions = {
    async getArticle(state, dispatch) {
        const res = await  axios({url: '/article'})

        console.log(res)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}