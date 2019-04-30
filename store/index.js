import Vuex from 'vuex'
import authModule from './modules/auth-logic'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      auth: authModule
    }
  })
}

export default createStore
