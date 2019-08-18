import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prodacts:[
      {name: 'banana skin', price: 20},
      {name: 'shiny star', price: 40},
      {name: 'green shells', price: 60},
      {name: 'red shells', price: 80}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
