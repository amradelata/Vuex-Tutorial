<template>
  <div id="product-list-one">
<h2>product list one</h2>
<ul>
    <li v-for="prodact in saleProducts">
      <span class="name">{{prodact.name}}</span>
      <span class="price">{{prodact.price}}$</span>
    </li>
</ul>
<button @click="reducePrice">reduce price</button>
  
  </div>
</template>

<script>
export default {
  computed:{
    prodacts(){
      return this.$store.state.prodacts 
    },
    saleProducts(){
      return this.$store.getters.saleProducts
    }
  },
  methods:{
    reducePrice(){
      // this.$store.state.prodacts.forEach(prodact => {
      //   prodact.price -= 1
      // });
      // this.$store.commit('reducePrice');  // mutations
      this.$store.dispatch('reducePrice');  //actions run after 2s
    }
  }
}
</script>


<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>