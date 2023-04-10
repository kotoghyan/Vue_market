<template>
  <div class="root">
    <h1>Filter</h1>
    <div class="inputContainer">
      <input class="input" type="text" placeholder="Min">
      <input class="input" type="text" placeholder="Max">
    </div>
  </div>
</template>

<script>

export default {
  name: "LeftSideFilter"
}

</script>

<style scoped>
.root {
  display: flex;
  height: 100vh;
  padding-right: 24px;
}
.root > h1 {
  text-align: center;
}
.inputContainer{
  display: flex;
  gap: 8px;
  padding-left: 16px;
}
.input{
  max-width: 70px;
  padding: 8px 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.30);
}
</style>