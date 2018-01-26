// initial state
const state = {
  noteNumber: 0
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {
  add(state) {
    state.noteNumber++;
  },
  init(state, number) {
    state.noteNumber = number;
  },
  reduce(state) {
    if (state.noteNumber === 0) {
      return;
    }
    state.noteNumber--;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
