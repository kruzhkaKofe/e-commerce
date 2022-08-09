<template>
  <section class="checkout ion-padding">
    <base-section-heading class="checkout__heading"
      >Checkout</base-section-heading
    >
    <slot></slot>
  </section>
  <ion-footer class="checkout__footer">
    <div class="checkout__amount ion-padding">
      <span class="checkout__total">Est. total</span>
      <span class="checkout__price">${{ fullAmount }}</span>
    </div>
    <base-black-button class="button">
      <icon-shopping-bag class="button__icon" slot="start" />
      <ion-label class="button__label">Checkout</ion-label>
    </base-black-button>
  </ion-footer>
</template>

<script setup>
import BaseSectionHeading from "./BaseSectionHeading";
import BaseBlackButton from "./BaseBlackButton";
import { IonFooter, IonButton, IonLabel, IonContent } from "@ionic/vue";
import { IconShoppingBag } from "@/components/icons/index";

const props = defineProps({
  fullAmount: Number,
});
</script>

<style lang="sass" scoped>
.checkout
	position: relative
	padding-top: 30px
	padding-bottom: 130px
	height: calc( 100% - 130px )
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
	&__footer
		background: #FFFFFF
		z-index: 10
		position: fixed
		bottom: 0
		left: 0
		right: 0

.button
	&__icon
		margin-right: 24px
:deep(.button__icon) path
	stroke: #FCFCFC
</style>
