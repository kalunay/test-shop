<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Menu</span>
                        <a href="" class="footer-menu__link">New arrivals</a>
                        <a href="" class="footer-menu__link">Best sellers</a>
                        <a href="" class="footer-menu__link">Recently viewed</a>
                        <a href="" class="footer-menu__link">Popular this week</a>
                        <a href="" class="footer-menu__link">All products</a>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Categories</span>
                        <a href="" class="footer-menu__link">Crockery</a>
                        <a href="" class="footer-menu__link">Furniture</a>
                        <a href="" class="footer-menu__link">Homeware</a>
                        <a href="" class="footer-menu__link">Plant pots</a>
                        <a href="" class="footer-menu__link">Chairs</a>
                        <a href="" class="footer-menu__link">Crockery</a>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Our company</span>
                        <a href="" class="footer-menu__link">About us</a>
                        <a href="" class="footer-menu__link">Vacancies</a>
                        <a href="" class="footer-menu__link">Contact us</a>
                        <a href="" class="footer-menu__link">Privacy</a>
                        <a href="" class="footer-menu__link">Returns policy</a>
                    </div>
                </div>
                <div class="footer-subscribe">
                    <span class="footer-subscribe__title">Join our mailing list</span>
                    <SubscribeForm />
                </div>
            </div>
            <div class="footer-bottom">
                <span class="footer-bottom__copyright">Copyright 2022 Avion LTD</span>
                <div class="footer-bottom-socials">
                    <a href="" class="footer-bottom-socials__link">
                        <img src="/svg/s-icon1.svg" alt="">
                    </a>
                    <a href="" class="footer-bottom-socials__link">
                        <img src="/svg/s-icon2.svg" alt="">
                    </a>
                    <a href="" class="footer-bottom-socials__link">
                        <img src="/svg/s-icon3.svg" alt="">
                    </a>
                    <a href="" class="footer-bottom-socials__link">
                        <img src="/svg/s-icon4.svg" alt="">
                    </a>
                    <a href="" class="footer-bottom-socials__link">
                        <img src="/svg/s-icon5.svg" alt="">
                    </a>
                    <a href="" class="footer-bottom-socials__link">
                        <img src="/svg/s-icon6.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import SubscribeForm from '@/components/UI/SubscribeForm.vue';
</script>

<style lang="scss" scoped>
.footer {
    background: var(--black);
    color: #fff;
    &-content {
        padding: 58px 82px 25px 82px;
        @media screen and (max-width: 1024px) {
            padding: 58px 25px 25px 25px;
        }
    }
    &-top {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 110px;
        border-bottom: 1px solid #4E4D93;
        padding-bottom: 30px;
        @media screen and (max-width: 1150px) {
            column-gap: 10px;
        }
    }
    &-menu {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px
        }
        &__title {
            font-family: var(--clash);
            display: block;
            margin-bottom: 12px;
        }
        &__link {
            display: block;
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            margin-bottom: 12px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    &-subscribe {
        &__title {
            display: block;
            color: #fff;
            font-size: 16px;
            font-family: var(--clash);
            margin-bottom: 30px;
        }
    }
    &-bottom {
        display: flex;
        padding-top: 22px;
        justify-content: space-between;
        &__copyright {
            font-size: 12px;
        }
        &-socials {
            display: flex;
            align-items: center;
            gap: 24px;
        }
    }
}
</style>