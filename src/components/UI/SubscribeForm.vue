<template>
    <div class="subscribe-form">
        <input type="text" placeholder="your@email.com" class="input-text subscribe-form__input">
        <ui-button>Sing up</ui-button>
    </div>
</template>

<script setup>
import uiButton from '@/components/UI/Button.vue';
</script>

<style lang="scss" scoped>
.subscribe-form {
    display: flex;
    &__input {
        flex-grow: 1;
    }
}
</style>