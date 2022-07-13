import { createStore } from 'vuex'
import tab from './tab'
import createPersistedState from "vuex-persistedstate"

const store = createStore({
  state: {
    video1play:0,
    video2play:0,
    video3play:0,
    video4play:0,
    video5play:0,
    video6play:0,
    CurrentUser:[
      {
        account:"",
      }
    ],
  },
  getters: {
  },
  mutations: {
    playAdd1(state:any) {
      state.video1play++
    },
    playAdd2(state:any) {
      state.video2play++
    },
    playAdd3(state:any) {
      state.video3play++
    },
    playAdd4(state:any) {
      state.video4play++
    },
    playAdd5(state:any) {
      state.video5play++
    },
    playAdd6(state:any) {
      state.video6play++
    },
    getCurrentUser(state:any,Currentaccount:any) {
      state.CurrentUser.account = Currentaccount
    },
  },
  actions: {
  },
  modules: {
    tab
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    // reducer(val) {
    //   return { // 只储存state中的user
    //     video1play:0
    //   }
    // }
  })]

})

export default store;