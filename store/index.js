export const state = () => ({
  height: 400,
  products: null,
})
export const getters = {}

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
  SET_THEME(state, theme) {
    state.theme = theme
  },
  SET_ITEM(state, { item = '', data = {} }) {
    state[item] = data
  },
  PUSH_ITEM(state, { item = '', data = [] }) {
    if (Object.keys(state).includes(item)) {
      for (const element of data) {
        if (state[item].find((e) => e.id === element.id) != null) {
          state[item].push(element)
        }
      }
    } else {
      state[item] = data
    }
  },
}
const items = ['appbar', 'categories', 'tags']
export const actions = {
  async nuxtServerInit({ dispatch, commit }, nuxtCtx) {
    for (const item of items) {
      await dispatch('getItems', { context: nuxtCtx, item })
    }
  },
  async getItems({ commit }, { context, item, q = [], props = {} }) {
    let data = null
    if (q.length > 0) {
      data = await context.$directus.items(item).read(q, props)
      commit('PUSH_ITEM', { item, data: data.data })
    } else {
      data = await context.$directus.items(item).read(props)
      commit('SET_ITEM', { item, data: data.data })
    }
  },
}
