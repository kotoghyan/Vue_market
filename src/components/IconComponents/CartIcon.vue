<template>
  <button class="root">
    <img v-bind:src="cart" alt="Cart">
  </button>
</template>

<script>
import cart from '../../assets/cart.svg'

export default {
  data() {
    return {
      cart,
    }
  },
  name: "CartIcon"
}
</script>

<style scoped>
.root {
  height: 60px !important;
  width: 60px;
  padding: 8px;
  background: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.root:hover {
  scale: 1.1;
  border: solid 3px white;
}

</style>