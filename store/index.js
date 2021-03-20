import wp from '@/plugins/wordpress'

export const state = () => ({
  pages: null,
  posts: null,
  products: null,
  theme: {
    isDark: false,
    themes: {
      dark: {
        primary: '#66D8C4',
        accent: '#D9C0EC',
        secondary: '#8E73AD',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#DD2C00',
        success: '#00E676',
      },
      light: {
        primary: '#66D8C4',
        accent: '#D9C0EC',
        secondary: '#8E73AD',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#DD2C00',
        success: '#00E676',
      },
    },
  },
})
export const getters = {
  getHome: (state) => {
    return state.pages.find((page) => page.title.rendered === 'Home')
  },
  getTheme: (state) => {
    return state.theme
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
  SET_THEME(state, theme) {
    state.theme = JSON.parse(theme.vuetify)
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

export const actions = {
  async nuxtServerInit({ dispatch, commit }, nuxtCtx) {
    await dispatch('getPages')
    await dispatch('getPosts')
    await dispatch('getTheme', nuxtCtx)
    await dispatch('getItems', { context: nuxtCtx, item: 'pages' })
    // commit('SET_VUETIFY_THEME', nuxtCtx)
  },
  async getPages({ commit }) {
    commit('SET_PAGES', await wp.pages().embed())
  },
  async getPosts({ commit }) {
    commit('SET_POSTS', await wp.posts().embed())
  },
  async getTheme({ commit }, context) {
    const theme = await context.$directus.items('template_theme').read()
    commit('SET_THEME', theme.data)
  },
  async getItems({ commit }, { context, item, q = [], props = {} }) {
    let data = null
    if (q.length > 0) {
      data = await context.$directus.items(item).read(q, props)
      commit('PUSH_ITEM', { item, data: data.data })
    } else {
      data = await context.$directus.items(item).read()
      commit('SET_ITEM', { item, data: data.data })
    }
  },
}
