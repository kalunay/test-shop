<template>
    <ProductDetail :product="productCurrent" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/api.js'
import ProductDetail from '../ProductDetail.vue';

const route = useRoute();
const router = useRouter();
const productId = ref('');
const productCurrent = ref({});

onMounted(async () => {
    productId.value = route.params.id;
    productCurrent.value = await api.getProduct(productId.value);
});
</script>