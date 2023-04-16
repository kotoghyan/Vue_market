<template>
  <div class="stock-item__info">
    <router-link class="stock-item__cover" :to="'/companyname/' + item.symbol">
      <img :src="item.image" alt="logo">
    </router-link>
    <h3 class="stock-item__title">
      {{ item.companyName }}
      <span>{{ item.symbol }}</span>
    </h3>
  </div>
  <div class="stock-item__price">
    <span>{{ item.price }} {{ item.currency }}</span>
    <button @click="$emit('buttonAction', item)">{{ condition ? `+` : '-' }}</button>
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
}
</script>

<style scoped>
.stock-item__info {
  display: flex;
  align-items: center;
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
  /*flex: 0 0 80px;*/
  width: 100%;
  text-align: right;
}

</style>