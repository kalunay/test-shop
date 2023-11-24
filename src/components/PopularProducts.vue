<template>
    <Products :products="popularProducts" />
</template>

<script setup>
import { onMounted,ref } from 'vue';
import Products from '@/components/Products.vue';
import api from '@/api';

const popularProducts = ref([]);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
})
</script>