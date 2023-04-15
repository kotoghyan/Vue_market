<template>
  <div v-if="isOpen" class="root" @click="closeModal"></div>
  <dialog class="dialog" :open="isOpen">
    <div>
      <h1>hello</h1>
    </div>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    }
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
  transform: translate(-50%, -50%)
}
</style>