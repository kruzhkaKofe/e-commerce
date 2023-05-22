<template>
  <base-layout page-default-back-link="/home" :footer="false">
    <base-checkout-section>
      <template #content>
        <checkout-cart
          :cart="allCart"
          @decrement="decrement"
          @increment="increment"
        />
      </template>
    </base-checkout-section>
    <template #custom-footer>
      <base-checkout-footer :fullAmount="fullAmount">
        <template #footer-button>
          <base-black-button class="button" @click="$router.push('/order')">
            <icon-shopping-bag class="button__icon" slot="start" />
            <ion-label class="button__label">Перейти к оплате</ion-label>
          </base-black-button>
        </template>
      </base-checkout-footer>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BaseCheckoutSection from "@/components/base/BaseCheckoutSection";
import BaseCheckoutFooter from "@/components/base/BaseCheckoutFooter";
import CheckoutCart from "@/components/checkoutpage/CheckoutCart";
import BaseBlackButton from "@/components/base/BaseBlackButton";
import { IonLabel } from "@ionic/vue";
import { IconShoppingBag } from "@/components/icons/index";

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

<style lang="sass" scoped>
.button
	&__icon
		margin-right: 24px
:deep(.button__icon) path
	stroke: #FCFCFC
</style>
