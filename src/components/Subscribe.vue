<template>
    <div class="subscribe">
        <div class="subscribe-content">
            <h3 class="subscribe-title">Join the club and get the benefits</h3>
            <span class="subscribe-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>

            <div class="subscribe-checks">
                <div class="subscribe-check">
                    <img src="/svg/checkmark-filled.svg" alt="" class="subscribe-check__image">
                    <span class="subscribe-check__name">Exclusive offers</span>
                </div>
                <div class="subscribe-check">
                    <img src="/svg/checkmark-filled.svg" alt="" class="subscribe-check__image">
                    <span class="subscribe-check__name">Free events</span>
                </div>
                <div class="subscribe-check">
                    <img src="/svg/checkmark-filled.svg" alt="" class="subscribe-check__image">
                    <span class="subscribe-check__name">Large discounts</span>
                </div>
            </div>

            <SubscribeForm />

        </div>
    </div>
</template>

<script setup>
import SubscribeForm from './UI/SubscribeForm.vue';
</script>

<style lang="scss" scoped>
.subscribe {
    background: url('/images/subscribe.jpg');
    background-size: cover;
    padding: 97px 0 86px 0;
    &-content {
        max-width: 500px;
        margin: auto;
        text-align: center;
        color: #fff;
        font-family: var(--clash);
    }
    &-title {
        display: block;
        margin: 0 0 12px 0;
        font-size: 32px;
        font-weight: 400;
    }
    &-description {
        display: block;
        font-size: 18px;
        margin-bottom: 40px;
    }
    &-checks {
        display: flex;
        justify-content: center;
        gap: 36px;
        margin-bottom: 40px;
    }
    &-check {
        display: flex;
        align-items: center;
        &__image {
            margin-right: 9px;
        }
    }
}
</style>