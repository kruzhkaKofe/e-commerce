<template>
  <ion-page>
    <main-menu content-id="main"></main-menu>
    <base-header id="main"></base-header>
    <ion-content>
      <main-cover></main-cover>
      <new-arrival></new-arrival>
      <brands-list></brands-list>
      <collections-section></collections-section>
      <recommendation-list :recs="recs"></recommendation-list>
      <trands-list :trands="trands"></trands-list>
      <our-advantages></our-advantages>
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
import RecommendationList from "@/components/homepage/RecommendationList.vue";
import TrandsList from "@/components/homepage/TrandsList.vue";
import OurAdvantages from "@/components/homepage/OurAdvantages.vue";

const recs = [
  {
    id: 1,
    title: 'Harris Tweed Three button Jacket',
    price: '$120',
    image: '/assets/homepage/recs/item.jpg',
  },
  {
    id: 2,
    title: 'Harris Tweed Three button Jacket',
    price: '$120',
    image: '/assets/homepage/recs/item.jpg',
  },
  {
    id: 3,
    title: 'Harris Tweed Three button Jacket',
    price: '$120',
    image: '/assets/homepage/recs/item.jpg',
  },
  {
    id: 4,
    title: 'Harris Tweed Three button Jacket',
    price: '$120',
    image: '/assets/homepage/recs/item.jpg',
  },
]

const trands = ['#2021', '#spring', '#collection', '#fall', '#dress', '#autumncollection', '#openfashion']


</script>

<style lang="sass" scoped>

</style>
