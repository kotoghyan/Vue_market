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
import TheHeader from "@/components/Pages/Header/TheHeader";
import LeftSideFilter from "@/components/Pages/LeftSideFilter/LeftSideFilter";
import MainBody from "@/components/Pages/MainBody/MainBody";
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
