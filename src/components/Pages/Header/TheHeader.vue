<template>
<div class="root">
  <div class="container">
    <img class="logo" v-bind:src="logo" alt="Market Logo">
    <header-input></header-input>
    <cart-icon></cart-icon>
<!--    <shared-button></shared-button>-->
  </div>
</div>
</template>



<script>
import logo from '@/assets/logo.png'
import HeaderInput from "@/components/Pages/Header/HeaderInput/HeaderInput";
import CartIcon from "@/components/IconComponents/CartIcon";

export default {
  data() {
    return {
      logo,
    }
  },
  components:{CartIcon, HeaderInput},
  name: "TheHeader"
}
</script>

<style scoped>
  .root{
    height: 100px;
    background-color: #232F3E;
  }
  .container{
    padding: 24px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .logo{
    width: fit-content;
    height: 100%;
  }
</style>