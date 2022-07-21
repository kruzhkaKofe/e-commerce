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
    <ion-content> </ion-content>
  </ion-menu>
</template>

<script setup>
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonMenuToggle,
  IonButton,
  IonContent,
  IonTitle,
} from "@ionic/vue";

import { IconClose } from "@/components/icons/index.js";
</script>

<style lang="sass" scoped>
ion-header::after
	height: 0

.title
	font-size: 14px
	letter-spacing: 3px
	text-transform: uppercase
	color: #333333
</style>
