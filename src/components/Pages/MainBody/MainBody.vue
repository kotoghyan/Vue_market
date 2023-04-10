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
import { mapState, mapActions } from 'vuex';
import ItemDraw from "@/components/Pages/MainBody/ItemDraw";

export default {
  components: {ItemDraw},
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapActions(['fetchData']),
  },
  mounted() {
    this.fetchData();
  },
};
</script>


<style scoped>
  .root{
    padding: 0 24px;
    flex: 1;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
  }
</style>