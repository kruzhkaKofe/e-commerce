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
import { storeToRefs } from "pinia";

const store = useHomeStore();

const { recs, trands, brands, links, advantages } = storeToRefs(store);
</script>

<style lang="sass" scoped>
:deep(ion-toolbar)
  --background: #E7EAEF
</style>
