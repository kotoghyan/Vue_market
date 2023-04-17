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
        <a href="https://www.nasdaq.com/"><h3>{{data.exchange}}</h3></a>
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
  padding: 20px;
}

.companyLogo {
  padding: 50px;
  background-color: rgba(147, 147, 147, 0.10);
  border:solid 1px rgba(101, 98, 98, 0.1);
  filter: drop-shadow(20px 10px 35px black);
  border-radius: 20px;
  box-sizing: border-box;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container > h1 {
  justify-self: center;
  height: fit-content;
}
.itemDescription{
  line-height:2.5;
}
.itemDescription a {
  text-decoration: none;
  color: #3e3780;
}
</style>