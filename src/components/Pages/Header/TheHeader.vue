<template>
<div class="root">
  <div class="container">
    <img class="logo" v-bind:src="logo" alt="Market Logo">
    <shared-input></shared-input>
    <shared-button></shared-button>
  </div>
</div>
</template>



<script>
import logo from '@/assets/logo.png'
import SharedButton from "@/components/shared/SharedButton";
import SharedInput from "@/components/shared/SharedInput";
export default {
  data() {
    return {
      logo,
    }
  },
  components:{SharedInput, SharedButton},
  name: "TheHeader"
}
</script>

<style scoped>
  .root{
    height: 100px;
  }
  .container{
    padding: 24px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    width: fit-content;
    height: 100%;
  }
</style>