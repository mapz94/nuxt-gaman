/* eslint-disable prettier/prettier */
import wp from '../plugins/wordpress'

const state = () => ({
  pages: [],
  error: ''
})

const getters = {}

const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  },
  SET_ERROR(state, error) {
    state.error = error
  }
}

const actions = {
  async getPages({ commit }) {
    try {
      const pages = await wp.pages()
      commit('SET_PAGES', pages)
    } catch (err) {
      commit('SET_ERROR', err.response.data.message, { root: true })
      throw err
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
