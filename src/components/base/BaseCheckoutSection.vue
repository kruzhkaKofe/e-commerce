<template>
  <section class="checkout ion-padding">
    <base-section-heading class="checkout__heading"
      >Checkout</base-section-heading
    >
    <slot></slot>
    <ion-footer class="checkout__footer">
      <div class="checkout__amount ion-padding">
        <span class="checkout__total">Est. total</span>
        <span class="checkout__price">${{ fullAmount }}</span>
      </div>
      <ion-button class="button">
        <icon-shopping-bag class="button__icon" slot="start" />
        <span>Checkout</span>
      </ion-button>
    </ion-footer>
  </section>
</template>

<script setup>
import BaseSectionHeading from "./BaseSectionHeading";
import { IonFooter, IonButton } from "@ionic/vue";
import { IconShoppingBag } from "@/components/icons/index";

const props = defineProps({
  fullAmount: Number,
});
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
	position: relative
	padding-top: 30px
	padding-bottom: 110px
	&__item
		& + &
			margin-top: 15px
	&__icon
		margin-right: 10px
	&__promo
		--highlight-color-focused: #DD8560
	&__input,
	&__delivery
		font-size: 14px
		line-height: 16px
		color: #333333
		--placeholder-opacity: 1
	&__delivery
		--highlight-color-focused: #DD8560
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
	width: 100%
	height: 56px
	font-size: 16px
	line-height: 26px
	letter-spacing: 0.01em
	text-transform: uppercase
	--color: #FCFCFC
	--background: #000000
	--border-radius: 0
	&__icon
		margin-right: 24px
:deep(.button__icon) path
	stroke: #FCFCFC
</style>
