<template>
  <base-layout page-default-back-link="/home" :footer="false">
    <base-checkout-section :fullAmount="fullAmount">
      <checkout-content
        :cart="allCart"
        @decrement="decrement"
        @increment="increment"
      />
    </base-checkout-section>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BaseCheckoutSection from "@/components/base/BaseCheckoutSection";
import CheckoutContent from "@/components/checkoutpage/CheckoutContent";

import { useCart } from "@/stores/cart.js";
import { storeToRefs } from "pinia";

const store = useCart();
const { allCart, fullAmount } = storeToRefs(store);

const increment = (item) => {
  store.increment(item);
};

const decrement = (item) => {
  store.decrement(item);
};
</script>

<style lang="sass" scoped></style>
