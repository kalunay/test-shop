import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basketStore', {
    state: () => ({
        cart: [],
    }),
    actions: {
        addToCart(product, count){
            const cartIndex = this.cart.findIndex(el => el.id === product.id);
            if(cartIndex === -1){
                this.cart.push({...product, count});
            }
        }
    }
})