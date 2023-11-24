<template>
    <div class="hero-info" :style="{background: bg, color: color}">
        <div class="hero-info__text">
            <h2 class="hero-info__title">{{ title }}</h2>
            <span class="hero-info__description">{{ description }}</span>
        </div>
        <uiButton :color="classBtn">View collection</uiButton>

    </div>
</template>

<script setup>
import uiButton from './UI/Button.vue';
const props = defineProps({
    title: {
        type: String,
        requires: false
    },
    description: {
        type: String,
        requires: false
    },
    link: {
        type: String,
        requires: false
    },
    bg: {
        type: String,
        default: '#fff'
    },
    color: {
        type: String,
        default: '#5B5676' 
    },
    classBtn: {
        type: String,
        default: 'secondary' 
    }
})
</script>

<style lang="scss" scoped>
    .hero-info {
        background: #fff;
        max-width: 630px;
        min-height: 444px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        &__title {
            font-family: var(--clash);
            font-weight: 400;
            line-height: 1.5;
        }
        &__description {
            color: var(--lightGray);
        }
    }
</style>