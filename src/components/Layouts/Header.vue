<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-search">
                <img src="/svg/header-search.svg" alt="">
            </div>
            <router-link to="/" class="header-logo">Avion</router-link>
            <div class="header-top-right">
                <div class="header-top-right__cart">
                    <a href="">
                        <img src="/svg/header-shopping-cart.svg" alt="">
                    </a>
                </div>
                <div class="header-top-right__user">
                    <a href="">
                        <img src="/svg/header-user-avatar.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <router-link :to="element.path" class="header-menu__link" v-for="(element, i) in menu" :key="i">{{ element.name }}</router-link>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const menu = [
    {
        name: 'Plant pots',
        path: '/'
    },
    {
        name: 'Ceramics',
        path: '/'
    },
    {
        name: 'Tables',
        path: '/'
    },
    {
        name: 'Chairs',
        path: '/'
    },
    {
        name: 'Crockery',
        path: '/'
    },
    {
        name: 'Tableware',
        path: '/'
    },
    {
        name: 'Cutlery',
        path: '/'
    }
]
</script>

<style lang="scss" scoped>
.header {
    height: 132px;
    background: #fff;
    &-top {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 70px;
        align-items: center;
        border-bottom: 1px solid rgba(0,0,0, .1);
        margin: 0 28px;
        &-right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;
        }
    }
    &-logo {
        color: var(--black);
        font-size: 24px;
        text-decoration: none;
        font-family: var(--clash);
        text-align: center;
        &:hover {
            text-decoration: underline;
        }
    }
    &-menu {
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 44px;
        &__link {
            color: var(--gray);
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>