<template>
  <a class="root link" v-bind:href="item.link">
    <img v-bind:src="item.image" v-bind:alt="item.title">
    <div class="fixed-block"><h3>{{ item.title }}</h3></div>
    <div class="price"><sup>{{ item.price.symbol }}</sup><h2>{{integer }}</h2><sup>{{decimal}}</sup></div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      decimal: '',
      integer: ''
    }
  },
  methods: {
    formatPrice() {
      const [integerPart, decimalPart] = this.item.price.value.toString().split('.');
      if (decimalPart) {
        this.decimal = decimalPart
      }
      this.integer = integerPart;
    }
  },
  mounted() {
    this.formatPrice();
  },
  name: "ItemDraw"
}
</script>

<style scoped>
.root {
  max-width: 250px;
  max-height: 580px;
  background-color: #FAFAFA;
  border:solid 1px rgba(108, 108, 108, 0.17);
}
.fixed-block {
  height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link {
  text-decoration: none;
  color: black;
}

.link:hover {
  color: #a75f00;
}
.price > h2{
  display: inline-block;
}
</style>