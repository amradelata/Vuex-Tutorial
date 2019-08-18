<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <productlistOne v-bind:prodacts="prodacts"/>
    <productlistTwo v-bind:prodacts="prodacts"/>
  </div>
</template>

<script>
import productlistOne from './components/productlistOne.vue';
import productlistTwo from './components/productlistTwo.vue';
export default {
  components:{
    productlistOne,
    productlistTwo
  },
  data(){
    return{
      prodacts:[
        {name: 'banana skin', price: 20},
        {name: 'shiny star', price: 40},
        {name: 'green shells', price: 60},
        {name: 'red shells', price: 80}
      ]
    }
  }
}
</script>
<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>