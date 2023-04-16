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
      data: 'main/data',
      condition: 'modal/modalItemList'
    }),
    // setCondition(item, cond = true){
    //   if (item) {
    //     cond = this.$store.state.modal.modalItemList.find(el => {
    //       if (el.item.symbol === item.symbol) {
    //         return el.itemCondition.fromPage
    //       }
    //     })
    //     return  cond.itemCondition.fromPage
    //   }
    //  return cond
    // }
  },
  methods: {
    addItemToModal(item) {
      this.$store.dispatch('modal/setItem', item);
    }
  },
  watch: {

  },
  // updated() {
  //   console.log(this.$store.state.modal.modalItemList);
  // }
  // methods: {
  //   redirectClickHandler(){
  //     let symbol = this.$route.params
  //     this.$store.dispatch('main/searchItem',symbol);
  //   }
  // },
  // data() {
  //   return this.$store.state.main.dataList;
  //   // const selected = null//this.$store.state.main.options;
  //   // const dataList = this.$store.state.main.dataList;
  //   // return selected ? dataList.filter(el => el.symbol === selected.symbol) : dataList;r
  // }
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