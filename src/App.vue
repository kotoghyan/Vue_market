<template>
  <div class="root">
    <the-header></the-header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader";

export default {
  name: 'App',
  components: {TheHeader},
  mounted() {
    console.log('AAAAAAAAA')
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
