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
  getters: {
    saleProducts: state => {
      const saleProducts = state.prodacts.map(prodact => {
        return{
          name: 'sale ' + prodact.name + '(50%)',
          price: prodact.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations:{
    reducePrice: state => {
      state.prodacts.forEach(prodact => {
        prodact.price -= 2
      });
    }
  },
  actions: {
    reducePrice: contex =>{  //contex cant to be anything
      setTimeout(function(){
        contex.commit('reducePrice')
      },2000)
    }
  },
})
