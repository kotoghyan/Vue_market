<template>
  <div class="root">
    <input class="input" type="text" @keyup.enter="searchCompany" v-model="text">
    <button class="icon" @click="searchCompany">
      <SearchIcon/>
    </button>
  </div>
</template>

<script>
import SearchIcon from "@/components/IconComponents/SearchIcon";

export default {
  components: {SearchIcon},
  data() {
    return {
      text: '',
    }
  },
  methods: {
    searchCompany(){
      this.$store.dispatch('main/optionsFetch', this.text.toUpperCase());
      this.text = ''
    }
  },
  name: "HeaderInput"
}
</script>

<style scoped>
.root {
  height: 50% !important;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.input {
  width: 100%;
  padding: 8px 50px 8px 16px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.64);
}

.icon {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
  color: rgba(0, 0, 0, 0.5);
  border: none;
  width: 24px;
  height: 24px;
  background: none;
  cursor: pointer;
}

.input:focus {
  outline: none;
}

/*.input::-webkit-outer-spin-button,*/
/*.input::-webkit-inner-spin-button {*/
/*  margin: 0;*/
/*  -webkit-appearance: none;*/
/*}*/
</style>