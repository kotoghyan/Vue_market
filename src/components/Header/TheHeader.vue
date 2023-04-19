<template>
  <div class="root">
    <div class="container">
      <router-link @cllick="drawGrid" to="/">
        <img class="logo" v-bind:src="logo" alt="Market Logo">
      </router-link>
      <header-input ></header-input>
      <v-btn @click="isOpen">ADD</v-btn>
      <cart-icon @click="showModal" ></cart-icon>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
import HeaderInput from "@/components/Header/HeaderInput/HeaderInput";
import CartIcon from "@/components/IconComponents/CartIcon";

export default {
  data() {
    return {
      logo,
    }
  },
  methods:{
    isOpen(){
      this.$store.dispatch('newItem/setIsOpen');
    },
    showModal(){
      this.$store.dispatch('modal/setModal');
    },
    drawGrid(){
      this.$store.dispatch('main/fetchData');
    }
  },

  components: {CartIcon, HeaderInput},
  name: "TheHeader"
}


</script>

<style scoped>
.root {
  height: 100px;
  background-color: #232F3E;
}

.container {
  padding: 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.container > a {
  height: 100%;
}

.logo {
  width: fit-content;
  height: 100%;
}
</style>