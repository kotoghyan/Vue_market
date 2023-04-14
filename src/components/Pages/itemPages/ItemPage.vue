<template>
  <div class="root">
    <h1>{{ data }}</h1>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ItemPage",
  computed:{
    ...mapGetters({
      data: 'main/itemSearch'
    }),
  },
  mounted() {
    let symbol = this.$route.params.symbol
    this.$store.dispatch('main/searchItem',symbol);
  }
}
</script>

<style scoped>
.root {
  width: 200px;
  height: 200px;
  overflow: hidden;
}
</style>