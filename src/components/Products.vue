<template>
    <div class="products">
        <div class="products-wrapper">
            <Product v-for="product of products" :key="product.id" :img="product.img" :title="product.title" :price="product.price" />
        </div>
        <a href="" class="products-link">View collection</a>
    </div>
</template>

<script setup>
//import { ref } from 'vue';
import Product from './Product.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

// const products = ref([
//   {
//     id: 1,
//     img: '/images/product-01.jpg',
//     title: 'The Dandy chair',
//     price: 250
//   },
//   {
//     id: 2,
//     img: '/images/product-02.jpg',
//     title: 'Rustic Vase Set',
//     price: 155
//   },
//   {
//     id: 3,
//     img: '/images/product-03.jpg',
//     title: 'The Silky Vase',
//     price: 125
//   },
//   {
//     id: 4,
//     img: '/images/product-04.jpg',
//     title: 'The Lucy Lamp',
//     price: 399
//   }
// ])
</script>

<style lang="scss" scoped>
.products {
    &-wrapper{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 20px;
        }
    }
    padding: 0 80px;
    &-link {
        display: block;
        max-width: 170px;
        background-color: #f9f9f9;
        color: #2a254b;
        padding: 16px 32px;
        margin: 64px auto 56px;
    }
}
</style>