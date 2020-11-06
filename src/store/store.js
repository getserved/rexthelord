import Vue from 'vue'
import Vuex from 'vuex'
import { cv } from './cv'
import { codenames } from './codenames'
import { hero } from './hero'
import { works } from './works'
import { grids } from './grids'
import { particles } from './particle'
import { paths } from './paths'
import { systems } from './systems'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    cv: cv,
    codenames: codenames,
    hero: hero,
    works: works,
    grids: grids,
    particles: particles,
    paths: paths,
    systems: systems
  }
})
