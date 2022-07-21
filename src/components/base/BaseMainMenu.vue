<template>
  <ion-menu side="start" content-id="menu" menu-id="first">
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-menu-toggle slot="start" menu="first">
          <ion-button class="close-button">
            <icon-close></icon-close>
          </ion-button>
        </ion-menu-toggle>
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
  IonButton,
  IonMenuToggle,
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
ion-header::after
	height: 0

ion-tab-bar
	--background: #FFFFFF

</style>
