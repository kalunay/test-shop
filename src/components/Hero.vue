<template>
    <div class="hero">
        <HeroInfo title="Luxury homeware for people who love timeless design quality" description="Shop the new Spring 2022 collection today" classBtn="lightgray" />
    </div>
</template>

<script setup>
import HeroInfo from './HeroInfo.vue';


</script>

<style lang="scss" scoped>
.hero {
    background: url('/images/hero.png') 50% 50% no-repeat;
    background-size: cover;
    height: 704px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
}
</style>