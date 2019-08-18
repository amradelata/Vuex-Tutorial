<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <productlistOne/>
    <productlistTwo/>
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