<template>
  <div class="root">
    <h1>Filter</h1>
    <select class="options" v-model="selected">
      <option value="" disabled>Select Company</option>
      <option v-for="item in data"
              :key="item.symbol"
              :value="item">
        {{ item.companyName }}
      </option>
    </select>
  </div>
</template>

<script>

import {mapGetters} from "vuex";


export default {
  name: "LeftSideFilter",
  data() {
    return {
      selected: [],

    }
  },
  // methods: {
  //   ...mapActions(['main/fetchData'])
  // },
  watch: {
    selected() {
      this.$store.dispatch('main/optionsFetch', this.selected)
    },
  },
  computed: {
    ...mapGetters({
      data: 'main/options'
    }),
  },
}

</script>
<style scoped>
.root {
  display: flex;
  height: 100vh;
}

.root > h1 {
  text-align: center;
}
.options{
  border: solid 1px black;
}
</style>