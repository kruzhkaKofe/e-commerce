<template>
  <ion-menu content-id="menu" menu-id="second" class="cart" side="end">
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-menu-toggle slot="start" menu="second">
          <ion-button class="close-button">
            <icon-close></icon-close>
          </ion-button>
        </ion-menu-toggle>
        <ion-title class="title">Cart</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content--empty" v-if="cart.length === 0">
        You have no items in your Shopping Bag.
      </div>
      <div class="content" v-else>
        <transition-group name="cart-item">
          <cart-item
            v-for="item in cart"
            :key="item.id"
            :item="item"
            @decrement="decrement"
            @increment="increment"
            class="content__item"
          />
        </transition-group>
      </div>
    </ion-content>
    <ion-footer v-if="cart.length === 0">
      <ion-menu-toggle class="result" menu="second">
        <ion-button class="result__button">
          <icon-shopping-bag class="result__shoopping-bag-icon" />
          <p class="result__text">Continue shopping</p>
        </ion-button>
      </ion-menu-toggle>
    </ion-footer>
    <ion-footer v-else>
      <div class="check">
        <div class="check__description">
          Sub total
          <span class="check__amount">${{ fullAmount }}</span>
        </div>
        <p class="check__notice">
          *shipping charges, taxes and discount codes are calculated at the time
          of accounting.
        </p>
      </div>
      <ion-menu-toggle class="result" menu="second">
        <ion-button class="result__button">
          <icon-shopping-bag class="result__shoopping-bag-icon" />
          <p class="result__text">Buy now</p>
        </ion-button>
      </ion-menu-toggle>
    </ion-footer>
  </ion-menu>
</template>

<script setup>
import {
  IonMenu,
  IonHeader,
  IonFooter,
  IonToolbar,
  IonMenuToggle,
  IonButton,
  IonContent,
  IonTitle,
} from "@ionic/vue";

import { IconClose, IconShoppingBag } from "@/components/icons/index.js";
import CartItem from "@/components/cart/CartItem";
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

<style lang="sass" scoped>
ion-header::after
	height: 0

.cart-item-enter-active,
.cart-item-leave-active 
	transition: all .7s ease

.cart-item-enter-from,
.cart-item-leave-to 
	opacity: 0
	transform: translateX(-50px)

.title
	font-size: 14px
	letter-spacing: 3px
	text-transform: uppercase
	color: #333333

.content
	height: 100%
	padding: 0 15px
	&__item
		& + &
			margin-top: 15px
	&--empty
		height: 100%
		display: flex
		align-items: center
		justify-content: center
		color: #888888
		font-size: 16px
		line-height: 20px

:deep(.result__shoopping-bag-icon) path
	stroke: #FCFCFC

.check
	padding: 25px 15px
	display: flex
	flex-direction: column
	font-size: 14px
	color: #333333
	&__description
		display: flex
		justify-content: space-between
		align-items: center
		line-height: 20px
		letter-spacing: 2px
		text-transform: uppercase
		margin-bottom: 15px
	&__amount
		color: #DD8560
		font-size: 18px
	&__notice
		text-align: justify
		color: #888888

.result
	&__button
		width: 100%
		height: 56px
		--background: black
		--border-radius: none
	&__text
		font-size: 16px
		line-height: 26px
		letter-spacing: 0.01em
		text-transform: uppercase
		color: #FCFCFC
		margin-left: 25px
</style>
