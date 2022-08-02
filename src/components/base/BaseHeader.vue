<template>
  <ion-header>
    <ion-toolbar v-if="searchOpen">
      <ion-searchbar
        placeholder="Search Items"
        type="text"
        inputmode="text"
        :animated="true"
        show-cancel-button="always"
        @ionCancel="isOpen"
      ></ion-searchbar>
    </ion-toolbar>
    <ion-toolbar v-else>
      <ion-buttons slot="start">
        <ion-menu-button class="menu__open-button" menu="first">
          <icon-menu class="icon-search" />
        </ion-menu-button>
      </ion-buttons>
      <div class="wrapper-logo">
        <ion-img class="logo" src="/assets/icons/Logo.png" alt="logo"></ion-img>
      </div>
      <ion-buttons slot="end">
        <ion-button>
          <icon-search class="icon-search" @click="isOpen" />
        </ion-button>
        <ion-button>
          <ion-menu-button class="cart__open-button" menu="second">
            <icon-shopping-bag class="icon-shopping-bag" />
          </ion-menu-button>
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
} from "@ionic/vue";

import {
  IconSearch,
  IconShoppingBag,
  IconMenu,
} from "@/components/icons/index.js";
import { ref } from "@vue/reactivity";

const searchOpen = ref(false);

const isOpen = () => {
  searchOpen.value = !searchOpen.value;
};
</script>

<style lang="sass" scoped>
ion-button
	width: 48px
	height: 48px
	--border-radius: 50% !important

.header-md::after
	content: none

.menu__open-button::part(icon)
	content: ''

.cart__open-button::part(icon)
	content: ''

.wrapper-logo
	display: flex
	justify-content: center

.logo
	width: 78px
	height: 31px
</style>
