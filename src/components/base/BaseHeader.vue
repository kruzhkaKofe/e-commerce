<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button class="menu__open-button"></ion-menu-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button>
          <icon-search />
        </ion-button>
        <ion-button>
          <icon-shoping-bag/>
        </ion-button>
      </ion-buttons>
      <div class="wrapper-logo">
        <ion-img
          class="logo"
          src="/assets/icons/Logo.png"
          alt="logo"
        ></ion-img>
      </div>
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
  IonIcon,
  IonImg,
} from "@ionic/vue";

import {IconSearch, IconShopingBag} from '@/components/icons/index.js'

const props = defineProps({
  background: String,
});
</script>

<style lang="sass" scoped>
ion-toolbar
	--border-width: 0px
	--border-style: none
	--border-color: #FFFFFF

.header-md::after
	content: none

.menu__open-button::part(icon)
	content: url('/public/assets/icons/Menu.svg')

.wrapper-logo
	display: flex
	justify-content: center

.logo
	width: 78px
	height: 31px
</style>
