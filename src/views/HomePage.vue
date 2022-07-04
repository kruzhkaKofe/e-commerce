<template>
  <ion-page>
    <main-menu content-id="main"></main-menu>
		<base-header id="main"></base-header>
    <ion-content>
      <main-cover></main-cover>
      <new-arrival></new-arrival>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonIcon,
  IonImg,
  IonContent,
} from "@ionic/vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import MainMenu from "@/components/MainMenu.vue";
import MainCover from "@/components/homepage/MainCover.vue";
import NewArrival from "@/components/homepage/NewArrival.vue";



</script>

<style lang="sass" scoped>


</style>
