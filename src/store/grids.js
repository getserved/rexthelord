import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const grids = ({
  state: {
    layout: {
      collapsed: true
    }
  },
  mutations: {
    toggleCollapsed (state) {
      state.layout.collapsed = !state.layout.collapsed
    }
  }
})
