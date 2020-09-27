import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [
      'HTML',
      'CSS',
      'SASS',
      'Bootstrap',
      'PHP',
      'Codeigniter',
      'Javascript',
      'Vuejs',
      'Vuex',
      'Vue Router',
      'MySQL',
      'Firebase',
      'Wordpress',
      'Laravel'
    ]
  },
  getters: {
    countSkills: state => {
      return state.skills.length
    }
  },
  mutations: {
    ADD_SKILL: (state, skill) => {
      state.skills.push(skill)
    },
    REMOVE_SKILL: (state, skill) => {
      state.skills.splice(skill, 1)
    }
  },
  actions: {
    removeSkill: (context, skill) => {
      context.commit("REMOVE_SKILL", skill)
    }
  },
  modules: {}
})