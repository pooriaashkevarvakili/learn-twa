import Axios from "axios"
const url = "https://jsonplaceholder.ir/posts"
export const state = ({
    titles: []
})
export const getters = {

}
export const mutations = {
    set_titles: (state, payload) => {
        state.titles = payload
    }
}
export const actions = {
    async nuxtServerInit({ commit }) {
        const response = await Axios.get(url)
        const data = response.data
        const titles = data.map(({ title }) => title);
        commit('set_titles', titles)

    }

}