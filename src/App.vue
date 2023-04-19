<template>
  <div class="root">
    <the-header></the-header>
    <div class="container">
      <router-view />
    </div>
    <cart-modal></cart-modal>
    <create-new-item-modal></create-new-item-modal>
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader";
import CartModal from "@/components/Modal/CartModal/CartModal";
import CreateNewItemModal from "@/components/Modal/CreateNewItemModal/CreateNewItemModal";

export default {
  name: 'App',
  components: {CreateNewItemModal, CartModal, TheHeader},
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
