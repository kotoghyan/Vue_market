<template>
  <div>
<!--    <button v-bind:class="cancel?'root':'cancel root'">{{title}}</button>-->
    <button v-bind:class="[buttonParams]">{{buttonName()}}</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'buy',
      cancel: true
    }
  },
  methods:{
    buttonName() {
      return this.cancel ? this.title = 'buy' : this.title = 'cancel'
    }
  },
  computed:{
    buttonParams() {
      return ['root', {cancel:!this.cancel}]
    },
  },
  name: "SharedButton"
}
</script>

<style scoped>
.root {
  padding: 12px 32px;
  font-size: 14px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  background: #ffd500;
}

.cancel {
  background: #D8000066;
  color: white;
}
</style>