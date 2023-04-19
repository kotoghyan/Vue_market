<template>
  <router-link class="stock-item__info" :to="'/companyname/' + item.symbol" >
    <div class="stock-item__cover" >
      <img :src="item.image" alt="logo">
    </div>
    <h3 class="stock-item__title">
      {{ item.companyName }}
      <span>{{ item.symbol }}</span>
    </h3>
  </router-link>
  <div class="stock-item__price">
    <span>{{ item.price }} {{ item.currency }}</span>
    <h1 class="button" @click="$emit('buttonAction', item)">{{ condition ? `+` : '-' }}</h1>
  </div>
</template>

<script>

export default {
  emits:['buttonAction'],
  props: {
    item: {
      type: Object,
      required: true,
    },
    condition: Boolean,
  },
  // methods:{
  //   a(symbol){
  //     // let symbol = this.$route.params.symbol
  //     this.$store.dispatch('main/searchItem', symbol);
  //   },
  // }
}
</script>

<style scoped>
.stock-item__info {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
}
.stock-item__price > button{
  background: none;
  height: fit-content;
}
.stock-item__cover {
  flex: 0 0 30px;
  margin-right: 15px;
}

.stock-item__cover > img {
  width: 100%;
}

.stock-item__title {
  flex:1;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;

}

.stock-item__title > span {
  display: block;
  font-weight: 400;
  font-size: 16px;
  color: #777;
  margin-top: 2px;
}

.stock-item__price {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  text-align: right;
  white-space: nowrap;
}
.button {
  cursor: pointer;
}

</style>