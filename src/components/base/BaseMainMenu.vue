<template>
  <ion-menu side="start">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="menu__close-button"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-tab-bar>
        <ion-tab-button v-for="(gender, i) in genders" :key="i" :tab="gender">
          <ion-label>{{ gender }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
      <ion-list>
        <ion-item>1</ion-item>
        <ion-item>2</ion-item>
        <ion-item>3</ion-item>
        <ion-item>4</ion-item>
        <ion-item>5</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from "@ionic/vue";

import { IconClose } from "@/components/icons/index.js";

const genders = ["Women", "Man", "Kids"];
</script>

<style lang="sass" scoped>
ion-toolbar,
ion-tab-bar
	--background: #FFFFFF

ion-menu
	--width: 100%

.menu
	&__close-button::part(icon)
		content: url('/public/assets/icons/Close.svg')

</style>
