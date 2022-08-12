<template>
  <ion-footer class="checkout__footer">
    <div class="checkout__amount ion-padding">
      <span class="checkout__total">Est. total</span>
      <span class="checkout__price">${{ fullAmount }}</span>
    </div>
    <slot name="footer-button"></slot>
  </ion-footer>
</template>

<script setup>
import { IonFooter } from "@ionic/vue";

const props = defineProps({
  fullAmount: Number
})
</script>

<style lang="sass" scoped>
.checkout
  &__footer
    background-color: #FFFFFF
    &::before
      content: none
  &__amount
    display: flex
    align-items: center
    justify-content: space-between
    text-transform: uppercase
    line-height: 34px
    letter-spacing: 3px
  &__total
    font-size: 14px
    color: #333333
  &__price
    font-size: 16px
    color: #DD8560
</style>
