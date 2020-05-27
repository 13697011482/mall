<template>
  <div class='goodslsit'>
      <goods-list-item v-for="item in goods" :key="item.id" :goodsitem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: 'GoodsList',
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.goodslsit {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>