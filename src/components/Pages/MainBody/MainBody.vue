<template>
  <div class="root">
    <ul class="container">
      <li v-for="user in data" :key="user.asin">
        <item-draw :item="user"></item-draw>
      </li>
    </ul>
  </div>
</template>

<script>
import ItemDraw from "@/components/Pages/MainBody/ItemDraw";
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  components: {ItemDraw},
  computed: {
    ...mapGetters({
      data: 'main/data'
    }),
  },
  mounted() {
    this.$store.dispatch('main/fetchData')
  },
};
</script>


<style scoped>
.root {
  padding: 0 24px;
  flex: 1;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>