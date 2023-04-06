<template>
<div class="root">
  <label class="label" htmlFor="input">
    $
  </label>
  <input  class="input" type="text">
</div>
</template>

<script>
export default {
  name: "SharedInput"
}
</script>

<style scoped>
.root {

  display: flex;
  width: fit-content;
  height: fit-content;
  position: relative;
}

.input {
  width: 100%;
  padding: 8px 24px 8px 30px;
  text-align: end;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.64);
}

.label {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
  color: rgba(0, 0, 0, 0.5);
}

.input:focus {
  outline: none;
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
</style>