import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

export const particles = ({
  namespaced: true,
  strict: true,
  state: {
    parameters: {
      ringWidth: 3.0,
      noiseTime: 0.0,
      twirl: 0.3,
      time: 0.0,
      speed: 0.1,
      noiseSpeed: 0.2
    }
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
})
