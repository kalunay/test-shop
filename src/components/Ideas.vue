<template>
    <div class="ideas">
        <HeroInfo 
            title="It started with a small idea" 
            description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014" 
            bg="#2a254b"
            color="#fff"
        />
        <img src="/images/idea.png" alt="" class="ideas-image">
    </div>
</template>

<script setup>
import HeroInfo from './HeroInfo.vue';
</script>

<style scoped>
.ideas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    margin-bottom: 60px;
    &-image {
        height: 100%;
        object-fit: cover;
    }
}
</style>