<template>
  <left-side-filter></left-side-filter>
  <div class="stock">
    <router-link class="stock-item" v-for="item in data" :key="item.symbol" :to="'/companyname/' + item.symbol">
      <item-grid :item="item"></item-grid>
    </router-link>
  </div>
</template>

<script>

import ItemGrid from "@/components/MainBody/ItemGrid/ItemGrid";
import LeftSideFilter from "@/components/LeftSideFilter/LeftSideFilter";
import {mapGetters} from "vuex";

export default {
  components: {ItemGrid,LeftSideFilter},

  // methods: {
  //   redirectClickHandler(){
  //     let symbol = this.$route.params
  //     this.$store.dispatch('main/searchItem',symbol);
  //   }
  // },

  computed: {
  ...mapGetters({
      data: 'main/data'
    }),
    // data() {
    //   return this.$store.state.main.dataList;
    //   // const selected = null//this.$store.state.main.options;
    //   // const dataList = this.$store.state.main.dataList;
    //   // return selected ? dataList.filter(el => el.symbol === selected.symbol) : dataList;r
    // }
  },
};
</script>


<style scoped>
.stock {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 5%;
  padding-right: 5%;
}

.stock-item {
  width: 310px;
  height: 90px;
  color: inherit;
  text-decoration: inherit;
  border: 1px solid #ccc;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
}

@media screen and (max-width: 1024px) {
  .stock-item {
    width: 100%;
    /*height: 100%;*/
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
    border: 1px solid #ccc;
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
  }
}

</style>