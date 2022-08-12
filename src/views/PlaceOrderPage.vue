<template>
  <base-layout page-default-back-link="/checkout" :footer="false">
    <base-checkout-section>
      <template #content>
        <p style="color: black">asdfsfsd</p>
      </template>
    </base-checkout-section>
    <template #custom-footer>
      <base-checkout-footer :fullAmount="fullAmount">
        <template #footer-button>
          <base-black-button class="button">
            <ion-label class="button__label">Place order</ion-label>
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
import BaseBlackButton from "@/components/base/BaseBlackButton";
import { IonLabel } from "@ionic/vue";
import { IconShoppingBag } from "@/components/icons/index";

import { useCart } from "@/stores/cart.js";
import { storeToRefs } from "pinia";

const store = useCart();
const { allCart, fullAmount } = storeToRefs(store);
</script>

<style lang="sass" scoped></style>
