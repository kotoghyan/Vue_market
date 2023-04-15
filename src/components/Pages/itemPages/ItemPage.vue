<template>
  <div class="root" v-if="data">
    <div class="companyLogo">
      <img :src="data.image"/>
    </div>
    <div class="container">
      <h1>{{ data.companyName }}</h1>
      <div class="itemDescription">
        <a :href="data.website"><h2>Visit the {{data.companyName}} Store</h2></a>
        <span>Address: {{data.country}}, {{data.state}}, {{data.city}}, {{data.address}}</span>
        <a href="https://www.nasdaq.com/">{{data.exchange}}</a>
        <h2>{{data.price}} {{data.currency}}</h2>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ItemPage",
  computed: {
    ...mapGetters({
      data: 'main/itemSearch'
    }),
  },
  mounted() {
    let symbol = this.$route.params.symbol
    this.$store.dispatch('main/searchItem', symbol);
  }
}
</script>

<style scoped>
.root {
  display: contents;
  width: 100%;
}

.companyLogo {
  padding: 20px;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container > h1 {
  justify-self: center;
  height: fit-content;
}
</style>