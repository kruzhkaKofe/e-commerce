<template>
  <section class="checkout ion-padding">
    <base-section-heading class="checkout__heading"
      >Checkout</base-section-heading
    >
    <transition-group name="cart-item">
      <base-cart-item
        class="checkout__item"
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @decrement="decrement"
        @increment="increment"
      />
    </transition-group>
  </section>
</template>

<script setup>
import BaseSectionHeading from "./BaseSectionHeading";
import BaseCartItem from "./BaseCartItem";

const props = defineProps({
  cart: Array,
});

const emit = defineEmits(["increment", "decrement"]);

const increment = (item) => {
  emit("increment", item);
};

const decrement = (item) => {
  emit("decrement", item);
};
</script>

<style lang="sass" scoped>
.cart-item-enter-active,
.cart-item-leave-active
	transition: all .7s ease

.cart-item-enter-from,
.cart-item-leave-to
	opacity: 0
	transform: translateX(-50px)

.checkout
	padding-top: 30px
</style>
