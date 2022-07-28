import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cart: [
      {
        id: 1,
        title: "Lamerei",
        description: "Recycle Boucle Knit Cardigan Pink",
        volume: 1,
        price: 120,
        image: "assets/cart/cart-item-image.jpg",
      },
      {
        id: 2,
        title: "Lamerei",
        description: "Recycle Boucle Knit Cardigan Pink",
        volume: 3,
        price: 150,
        image: "assets/cart/cart-item-image.jpg",
      },
      {
        id: 3,
        title: "Lamerei",
        description: "Recycle Boucle Knit Cardigan Pink",
        volume: 5,
        price: 60,
        image: "assets/cart/cart-item-image.jpg",
      },
      {
        id: 4,
        title: "Lamerei",
        description: "Recycle Boucle Knit Cardigan Pink",
        volume: 1,
        price: 1200,
        image: "assets/cart/cart-item-image.jpg",
      },
      {
        id: 5,
        title: "Lamerei",
        description: "Recycle Boucle Knit Cardigan Pink",
        volume: 2,
        price: 500,
        image: "assets/cart/cart-item-image.jpg",
      },
    ],
  }),

  getters: {
    allCart() {
      return this.cart;
    },

    fullAmount() {
      const amount = this.cart.reduce((result, item) => {
        return result + item.volume * item.price;
      }, 0);
      return amount;
    },
  },

  actions: {
    increment(product) {
      const item = this.cart.find((item) => item.id === product.id);
      item.volume++;
    },

    decrement(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item.volume > 1) {
        item.volume--;
      }
      if (item.volume === 1) {
        this.removeFromCart(item);
      }
    },

    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
    },
  },
});
