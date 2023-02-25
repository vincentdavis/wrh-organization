const state = {
  Themes: {
    Solid: [
      {
        primary: '#9155FD',
      },

      {
        primary: '#00c5b0',
      },
      {
        primary: '#ec1815',
      },
      {
        primary: '#03b654',
      },
      {
        primary: '#277af7',
      },
    ],
    Light: [
      {
        primary: '#f2f2f2',
        secondary: '#00a7f6',
      },
      {
        primary: '#f2f2f2',
        secondary: '#ff6400',
      },

      {
        primary: '#f2f2f2',
        secondary: '#00c5b0',
      },
      {
        primary: '#f2f2f2',
        secondary: '#ec1815',
      },
      {
        primary: '#f2f2f2',
        secondary: '#03b654',
      },
      {
        primary: '#f2f2f2',
        secondary: '#277af7',
      },
    ],
  },
}

const getters = {
  Themes: state => state.Themes,
}
const actions = {}

const mutations = {}

export const ThemeStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
