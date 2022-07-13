<template>
  <base-layout>
    <main-cover></main-cover>
    <new-arrival></new-arrival>
    <brands-list :brands="brands"></brands-list>
    <collections-section></collections-section>
    <recommendation-list :recs="recs"></recommendation-list>
    <trands-list :trands="trands"></trands-list>
    <our-advantages :advantages="advantages"></our-advantages>
    <follow-us :links="links"></follow-us>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout.vue";
import MainCover from "@/components/homepage/MainCover.vue";
import NewArrival from "@/components/homepage/NewArrival.vue";
import BrandsList from "@/components/homepage/BrandsList.vue";
import CollectionsSection from "@/components/homepage/CollectionsSection.vue";
import RecommendationList from "@/components/homepage/RecommendationList.vue";
import TrandsList from "@/components/homepage/TrandsList.vue";
import OurAdvantages from "@/components/homepage/OurAdvantages.vue";
import FollowUs from "@/components/homepage/FollowUs.vue";
import { useHomeStore } from "@/stores/home.js";

const store = useHomeStore();

const recs = store.allRecs

const trands = [
  "#2021",
  "#spring",
  "#collection",
  "#fall",
  "#dress",
  "#autumncollection",
  "#openfashion",
];

const brands = [
  {
    id: 1,
    name: "Prada",
    image: "/assets/homepage/brands/Prada.png",
  },
  {
    id: 2,
    name: "Burberry",
    image: "/assets/homepage/brands/Burberry.png",
  },
  {
    id: 3,
    name: "Boss",
    image: "/assets/homepage/brands/Boss.png",
  },
  {
    id: 4,
    name: "Cartier",
    image: "/assets/homepage/brands/Cartier.png",
  },
  {
    id: 5,
    name: "Gucci",
    image: "/assets/homepage/brands/Gucci.png",
  },
  {
    id: 6,
    name: "Tiffany",
    image: "/assets/homepage/brands/Tiffany.png",
  },
];

const links = [
  {
    id: 1,
    image: "/assets/homepage/follow/first.jpg",
    path: "@mia",
  },
  {
    id: 2,
    image: "/assets/homepage/follow/second.jpg",
    path: "@_jihyn",
  },
  {
    id: 3,
    image: "/assets/homepage/follow/third.jpg",
    path: "@mia",
  },
  {
    id: 4,
    image: "/assets/homepage/follow/fourth.jpg",
    path: "@_jihyn",
  },
];

const advantages = [
  {
    id: 1,
    image: "/assets/homepage/advantages/Fast-shipping.png",
    description: "Fast shipping. Free on orders over $25.",
  },
  {
    id: 2,
    image: "/assets/homepage/advantages/Sustainable.png",
    description: "Sustainable process from start to finish.",
  },
  {
    id: 3,
    image: "/assets/homepage/advantages/Unique-design.png",
    description: "Unique designs and high-quality materials.",
  },
  {
    id: 4,
    image: "/assets/homepage/advantages/Heart-crown.png",
    description: "Fast shipping. Free on orders over $25.",
  },
];

</script>

<style lang="sass" scoped>
:deep(ion-toolbar)
  --background: #E7EAEF
</style>