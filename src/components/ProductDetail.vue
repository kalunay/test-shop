<template>
    <div class="product">
        <div>
            <img :src="product.image" alt="">
        </div>
        <div>
            <h2 class="product-name">{{ product.name }}</h2>
            <span class="product-price">{{ product.price }}</span>
            <div class="product-block product-description">
                <div class="product-description__title">Product description</div>
                <div v-html="product.description"></div>
            </div>
            <div class="product-block">
                <span class="product-block__title">Dimensions</span>
                <span class="product-param" v-for="(param, i) of product.params" :key="i">{{ param.title }}: {{ param.value }}</span>
            </div>
            <div class="product-block">
                <span class="product-block__title">Quantity</span>
                <div class="product-quantity">
                    <span class="product-quantity-symbol" @click="changeQuantity('minus')">-</span>
                    <span class="product-quantity-value">{{ quatity }}</span>
                    <span class="product-quantity-symbol" @click="changeQuantity('plus')">+</span>
                </div>
            </div>
            <ui-button :color="secondary" @click="basketStore.addToCart(product, quatity)">Add to cart</ui-button>
        </div>
    </div>

    <PopularProducts />
    <AboutBrand />
    <Subscribe />
</template>

<script setup>
import { ref } from 'vue';
import uiButton from './UI/Button.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import Subscribe from '@/components/Subscribe.vue';
import PopularProducts from '@/components/PopularProducts.vue';
import { useBasketStore } from '../store/basket';

const props = defineProps({
    product: {
        type: Object,
        default: () => {},
        required: true
    }
});

const basketStore = useBasketStore();
const quatity = ref(1);

const changeQuantity = (type) => {
    if(type === 'minus'){
        quatity.value === 1 ? (quatity.value = 1) : quatity.value--;
    }
    if(type === 'plus'){
        quatity.value === 3 ? (quatity.value = 3) : quatity.value++;
    }
}
</script>

<style lang="scss" scoped>
.product {
    background-color: var(--graylight);
    padding: 50px 80px;
    display: grid;
    grid-template-columns: 1fr 500px;
    column-gap: 65px;
    align-items: center;
    &-name {
        margin: 0 0 16px 0;
        font-family: var(--clash);
        font-size: 36px;
    }
    &-price {
        display: block;
        font-size: 24px;
        margin-bottom: 28px;
    }
    &-block {
        margin-bottom: 40px;
    }
    &-description {
        border-top: 1px solid var(--gray);
        padding-top: 24px;
        &__title {
            display: block;
            font-family: var(--clash);
            margin-bottom: 14px;
        }
    }
    &-param {
        display: block;
    }
    &-quantity {
        background: #fff;
        width: 122px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        &-symbol {
            color: var(--gray);
            cursor: pointer;
        }
    }
}
</style>