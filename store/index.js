import wp from '@/plugins/wordpress'

export const state = () => ({
  pages: null,
  posts: null,
  products: null,
})
export const getters = {
  getHome: (state) => {
    return state.pages.find((page) => page.title.rendered === 'Home')
  },
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages.map((page) => {
      if (page.slug === 'home') {
        page.slug = '/'
      }
      return page
    })
  },
  SET_POSTS(state, posts) {
    state.posts = posts.map((post) => {
      return post
    })
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }, nuxtCtx) {
    await dispatch('getPages')
    await dispatch('getPosts')
  },
  async getPages({ commit }) {
    commit('SET_PAGES', await wp.pages().embed())
  },
  async getPosts({ commit }) {
    commit('SET_POSTS', await wp.posts().embed())
  },
}
