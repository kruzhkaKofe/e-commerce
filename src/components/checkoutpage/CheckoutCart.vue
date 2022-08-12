<template>
  <template v-if="cart.length !== 0">
    <transition-group name="cart-item">
      <base-cart-item
        class="checkout__cart-item"
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @decrement="decrement"
        @increment="increment"
      />
    </transition-group>
    <ion-item-divider />
    <ion-item class="checkout__promo checkout__action">
      <icon-voucher class="checkout__icon" />
      <ion-input
        class="checkout__input"
        type="text"
        placeholder="Add promo code"
        clear-input
      ></ion-input>
    </ion-item>
    <ion-item class="checkout__delivery checkout__action">
      <icon-delivery class="checkout__icon" />
      <ion-label class="checkout__delivery-label">Delivery</ion-label>
      <ion-select
        class="checkout__select"
        interface="action-sheet"
        :interface-options="options"
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
  </template>
  <template v-else>
    <div class="checkout_empty">No items in cart.</div>
  </template>
</template>

<script setup>
import BaseCartItem from "@/components/base/BaseCartItem";
import { IconVoucher, IconDelivery } from "@/components/icons/index";
import {
  IonItem,
  IonLabel,
  IonItemDivider,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";

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

const options = {
  header: "Delivery",
  subHeader: "Select delivery option"
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

ion-item
	--background: #FFFFFF
	--border-color: rgba(0, 0, 0, 0.1)

ion-item-divider
	--background: #FFFFFF
	--ion-item-border-color: rgba(0, 0, 0, 0.1)

.checkout
	&__cart-item
		& + &
			margin-top: 15px
	&__icon
		margin-right: 10px
	&__action
		--background-activated: #DD8560
		--highlight-color-focused: #DD8560
	&__input,
	&__delivery
		font-size: 14px
		line-height: 16px
		color: #333333
		--placeholder-opacity: 1
	&_empty
		height: 100%
		display: flex
		align-items: center
		justify-content: center
		color: #888888
		font-size: 16px
		line-height: 20px

.ios
	& .checkout__action
		--padding-start: 0
	& .checkout__action::part(native)
		--inner-padding-start: 15px
		--inner-padding-end: 15px
	& .checkout__select::part(icon)
		width: 20px
</style>
