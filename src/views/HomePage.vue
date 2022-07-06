<template>
  <ion-page>
    <main-menu content-id="main"></main-menu>
    <base-header id="main"></base-header>
    <ion-content>
      <main-cover></main-cover>
      <new-arrival></new-arrival>
      <brands-list></brands-list>
      <collections-section></collections-section>
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
import BrandsList from "@/components/homepage/BrandsList.vue";
import CollectionsSection from "@/components/homepage/CollectionsSection.vue";
</script>

<style lang="sass" scoped>

</style>
