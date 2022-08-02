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
    <ion-item-divider />
    <ion-item class="checkout__promo">
      <icon-voucher class="checkout__icon" />
      <ion-input
        class="checkout__input"
        type="text"
        placeholder="Add promo code"
        clear-input
      ></ion-input>
    </ion-item>
    <ion-item class="checkout__delivery">
      <icon-delivery class="checkout__icon" />
      <ion-label class="checkout__delivery-label">Delivery</ion-label>
      <ion-select
        class="checkout__select"
        interface="action-sheet"
        :interface-options="selectOptions"
        value="Free"
      >
        <ion-select-option class="checkout__select-option" value="Free"
          >Free</ion-select-option
        >
        <ion-select-option class="checkout__select-option" value="Express"
          >Express(+5.99$)</ion-select-option
        >
      </ion-select>
    </ion-item>
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
import BaseBlackButton from "./BaseBlackButton";
import BaseCartItem from "./BaseCartItem";
import {
  IconVoucher,
  IconDelivery,
  IconShoppingBag,
} from "@/components/icons/index";
import {
  IonFooter,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/vue";

const props = defineProps({
  cart: Array,
  fullAmount: Number,
});

const emit = defineEmits(["increment", "decrement"]);

const increment = (item) => {
  emit("increment", item);
};

const decrement = (item) => {
  emit("decrement", item);
};

const selectOptions = {
  header: "Delivery",
  subHeader: "Select delivery option",
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
