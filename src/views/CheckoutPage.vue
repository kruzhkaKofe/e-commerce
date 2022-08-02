<template>
  <base-layout page-default-back-link="/home" :footer="false">
    <base-checkout :cart="cart" @decrement="decrement" @increment="increment" />
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BaseCheckout from "@/components/base/BaseCheckout";

import { useCart } from "@/stores/cart.js";
import { storeToRefs } from "pinia";

const store = useCart();
const { cart, fullAmount } = storeToRefs(store);

const increment = (item) => {
  store.increment(item);
};

const decrement = (item) => {
  store.decrement(item);
};
</script>

<style lang="sass" scoped></style>
