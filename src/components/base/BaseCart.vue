<template>
  <ion-menu side="end" content-id="menu" menu-id="cart" class="cart">
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-menu-toggle slot="start" menu="cart" autoHide="false">
          <ion-button class="close-button">
            <icon-close></icon-close>
          </ion-button>
        </ion-menu-toggle>
        <ion-title class="title">Cart</ion-title>
      </ion-toolbar>
    </ion-header>

    <template v-if="allCart.length === 0">
      <ion-content>
        <div class="content content_empty">
          You have no items in your Shopping Bag.
        </div>
      </ion-content>
      <ion-footer class="footer">
        <base-black-button class="result__button" @click="closeCart">
          <icon-shopping-bag class="result__icon" />
          Continue shopping
        </base-black-button>
      </ion-footer>
    </template>

    <template v-if="allCart.length !== 0">
      <ion-content>
        <div class="content ion-padding">
          <transition-group name="cart-item">
            <base-cart-item
              v-for="item in allCart"
              :key="item.id"
              :item="item"
              @decrement="decrement"
              @increment="increment"
              class="content__item"
            />
          </transition-group>
        </div>
      </ion-content>
      <ion-footer class="footer">
        <div class="check">
          <div class="check__description">
            Sub total
            <span class="check__amount">${{ fullAmount }}</span>
          </div>
          <p class="check__notice">
            *shipping charges, taxes and discount codes are calculated at the
            time of accounting.
          </p>
        </div>
        <base-black-button
          class="result__button"
          @click="$router.push('/checkout')"
        >
          <icon-shopping-bag class="result__icon" />
          Buy now
        </base-black-button>
      </ion-footer>
    </template>
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
  menuController,
} from "@ionic/vue";

import BaseCartItem from "./BaseCartItem";
import BaseBlackButton from "./BaseBlackButton";
import { IconClose, IconShoppingBag } from "@/components/icons/index.js";
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

const closeCart = async () => {
  await menuController.close();
};
</script>

<style lang="sass" scoped>
ion-header::after
	height: 0

.cart-item-enter-active,
.cart-item-leave-active
	transition: all .5s ease

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
	&__item
		& + &
			margin-top: 15px
	&_empty
		height: 100%
		display: flex
		align-items: center
		justify-content: center
		color: #888888
		font-size: 16px
		line-height: 20px

.footer
	background-color: #FFFFFF

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
	&__icon
		margin-right: 24px

:deep(.result__icon) path
	stroke: #FCFCFC
</style>
