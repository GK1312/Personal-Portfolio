export const state = () => ({
    data: {},
    newData: {},
    loading: false,
    userId: '',
    sessionId: '',
    sessionName: '',
    modalOpen: false,
    ladders: '',
    error: {}
  })
  export const getters = {
    modalOpen: (state) => state.modalOpen
  }
  export const mutations = {
    set_modal(state, data) {
      state.modalOpen = data
    },
    set_data(state, data) {
      state.userId = this.$auth.user._id
      state.ladders = data
    },
    set_sessionName(state, sessionName) {
      state.sessionName = sessionName
    },
    set_error(state, data) {
      state.error = data
    },
    set_loading(state, data) {
      state.loading = data
    }
  }
  
  export const actions = {
    async getFancyLadder({ commit }, session) {
      commit('set_data', {})
      commit('set_loading', true)
      try {
        const { data } = await this.$axios({
          method: 'post',
          baseURL: process.env.SPORTSBOOK_API_URL,
          url: 'Book/getLadder',
          data: {
            userId: this.$auth.user._id,
            sessionId: session.sessionId
          }
        })
        commit('set_data', data.data)
        commit('set_sessionName', session.sessionName)
        commit('set_loading', false)
      } catch (error) {
        commit('set_error', error)
        commit('set_loading', false)
      }
    }
  }
  