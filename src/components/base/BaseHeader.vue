<template>
  <ion-header>
    <ion-toolbar v-if="searchOpen">
      <ion-searchbar
        placeholder="Search Items"
        type="text"
        inputmode="text"
        :animated="true"
        show-cancel-button="always"
        @ionCancel="isSearchOpen"
      ></ion-searchbar>
    </ion-toolbar>

    <ion-toolbar v-else>
      <ion-buttons slot="start">
        <ion-button
          class="menu__open-button"
          menu="main"
          autoHide="false"
          @click="openMainMenu"
        >
          <icon-menu class="icon-search" />
        </ion-button>
      </ion-buttons>
      <div class="wrapper-logo">
        <ion-img class="logo" src="/assets/icons/Logo.png" alt="logo"></ion-img>
      </div>
      <ion-buttons slot="end">
        <ion-button>
          <icon-search class="icon-search" @click="isSearchOpen" />
        </ion-button>
        <ion-button
          class="cart__open-button"
          menu="cart"
          autoHide="false"
          @click="openCart"
        >
          <icon-shopping-bag class="icon-shopping-bag" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonSearchbar,
  IonImg,
  menuController,
} from "@ionic/vue";

import {
  IconSearch,
  IconShoppingBag,
  IconMenu,
} from "@/components/icons/index.js";
import { ref } from "vue";

const searchOpen = ref(false);

const isSearchOpen = () => {
  searchOpen.value = !searchOpen.value;
};

const openMainMenu = async () => {
  await menuController.open("main");
};

const openCart = async () => {
  await menuController.open("cart");
};
</script>

<style lang="sass" scoped>
ion-searchbar
	font-size: 14px
	line-height: 34px
	--background: #FFFFFF
	--placeholder-color: #000000
	--cancel-button-color: #555555
	--color: #000000

ion-button
	width: 48px
	height: 48px
	--border-radius: 50% !important

.header-md::after
	content: none

.wrapper-logo
	display: flex
	justify-content: center

.logo
	width: 78px
	height: 31px
</style>
