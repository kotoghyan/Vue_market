<template>
  <div class="root">
    <the-header></the-header>
    <div class="container">
      <left-side-filter></left-side-filter>
      <main-body></main-body>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader";
import LeftSideFilter from "@/components/LeftSideFilter/LeftSideFilter";
import MainBody from "@/components/MainBody/MainBody";
export default {
  name: 'App',
  components: {
    MainBody,
    LeftSideFilter,
    TheHeader

  }
}
</script>

<style>
.root {
  display: flex;
  flex-direction: column;
}
.container{
  display: flex;
  padding: 24px;
  gap: 16px;
}
</style>
