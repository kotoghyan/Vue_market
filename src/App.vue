<template>
  <div class="root">
    <the-header></the-header>
    <div class="container">
      <router-view />
    </div>
    <cart-modal></cart-modal>
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader";
import CartModal from "@/components/Modal/CartModal/CartModal";

export default {
  name: 'App',
  components: {CartModal, TheHeader},
  mounted() {
    this.$store.dispatch('main/fetchData');
  },
}
</script>

<style>
.root {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  padding: 24px;
  gap: 16px;
}
</style>
