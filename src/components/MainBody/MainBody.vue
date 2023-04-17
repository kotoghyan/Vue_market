<template>
  <left-side-filter></left-side-filter>
  <div class="stock">
    <div class="stock-item" v-for="item in data" :key="item.symbol">
      <item-grid :item="item" :condition="true" @buttonAction="addItemToModal(item)"></item-grid>
    </div>
  </div>
</template>

<script>
import ItemGrid from "@/components/MainBody/ItemGrid/ItemGrid";
import LeftSideFilter from "@/components/LeftSideFilter/LeftSideFilter";
import {mapGetters} from "vuex";

export default {
  components: {ItemGrid, LeftSideFilter},
  computed: {
    ...mapGetters({
      data: 'main/dataList',
      condition: 'modal/modalItemList'
    }),
  },
  methods: {
    addItemToModal(item) {
      this.$store.dispatch('modal/setItem', item);
    }
  },
  mounted() {
    this.$store.dispatch('main/fetchData');
  }
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
  width: 400px;
  height: 100px;
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
    color: inherit;
    text-decoration: inherit;
    border: 1px solid #ccc;
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
  }
}

</style>