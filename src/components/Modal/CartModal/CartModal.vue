<template>
  <div v-if="isOpen" class="root">
  <dialog class="dialog" open >
    <v-btn class="button" @click="closeModal">X</v-btn>
    <div class="stock-item" v-for="item in itemList" :key="item.symbol">
      <item-grid :item="item" @buttonAction="deleteFromModal"></item-grid>
    </div>
  </dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ItemGrid from "@/components/MainBody/ItemGrid/ItemGrid";

export default {
  components: {ItemGrid},
  computed:{
    ...mapGetters({
      isOpen:"modal/isOpen",
      itemList:'modal/modalItemList',
    })
  },
  methods: {
    closeModal() {
      this.$store.dispatch('modal/setModal');
    },
    deleteFromModal(item){
      this.$store.dispatch('modal/deleteItem', item);
    },
  },
  name: "CartModal"
}
</script>

<style scoped>
.root {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}
.stock-item {
  height: 90px;
  color: inherit;
  text-decoration: inherit;
  border: 1px solid #ccc;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #e3e3e3;
}
.dialog {
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 8px;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  display: flex;
  overflow: auto;
}
.button {
  padding: 10px 20px;
  border-radius: 8px;
  align-self: flex-end;
  font-size: 20px;
  font-weight: 600;
}
</style>