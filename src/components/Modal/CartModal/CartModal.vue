<template>
  <div v-if="isOpen" class="root">
  <dialog class="dialog" open >
    <button @click="closeModal" >X</button>
    <item-grid v-for="item in itemList" :key="item.symbol" :item="item" @buttonAction="deleteFromModal"></item-grid>
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

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
}
</style>