<template>
    <button :class="['btn', {'btn--primary': color === 'primary', 'btn--secondary': color === 'secondary', 'btn--lightgray': color === 'lightgray'}]"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        required: false
    }
});
</script>

<style lang="scss" scoped>
.btn {
    padding: 0 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    height: 56px;
    &:hover {
        opacity: 0.8;
    }
    &--primary {
        background: var(--black);
        color: #fff;
    }
    &--secondary {
        background: rgba(249,249,249, .15);
        color: #fff;
    }
    &--lightgray {
        background: #f9f9f9;
        color: #2a254b;
    }
}
</style>