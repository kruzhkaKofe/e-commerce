<template>
  <base-layout>
    <main-cover></main-cover>
    <new-arrival></new-arrival>
    <brands-list></brands-list>
    <collections-section></collections-section>
    <recommendation-list :recs="recs"></recommendation-list>
    <trands-list :trands="trands"></trands-list>
    <our-advantages></our-advantages>
    <follow-us></follow-us>
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

const recs = [
  {
    id: 1,
    title: "Harris Tweed Three button Jacket",
    price: "$120",
    image: "/assets/homepage/recs/item.jpg",
  },
  {
    id: 2,
    title: "Harris Tweed Three button Jacket",
    price: "$120",
    image: "/assets/homepage/recs/item.jpg",
  },
  {
    id: 3,
    title: "Harris Tweed Three button Jacket",
    price: "$120",
    image: "/assets/homepage/recs/item.jpg",
  },
  {
    id: 4,
    title: "Harris Tweed Three button Jacket",
    price: "$120",
    image: "/assets/homepage/recs/item.jpg",
  },
];

const trands = [
  "#2021",
  "#spring",
  "#collection",
  "#fall",
  "#dress",
  "#autumncollection",
  "#openfashion",
];
</script>

<style lang="sass" scoped>
:deep(ion-toolbar)
  --background: #E7EAEF
</style>