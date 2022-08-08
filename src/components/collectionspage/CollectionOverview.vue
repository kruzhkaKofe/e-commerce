<template>
  <base-october-section class="section">
    <ion-img
      class="section__image"
      :src="collection.cover"
      :alt="collection.title"
    />
    <collection-products-list class="section__list" :collection="collection" />
    <collection-may-like :otherCollections="otherCollections" />
  </base-october-section>
</template>

<script setup>
import BaseOctoberSection from "@/components/base/BaseOctoberSection";
import CollectionProductsList from "@/components/collectionspage/CollectionProductsList";
import CollectionMayLike from "@/components/collectionspage/CollectionMayLike";
import { IonImg } from "@ionic/vue";

const props = defineProps({
  collection: Object,
  otherCollections: Array,
});
</script>

<style lang="sass" scoped>
.section
  &__image
    position: relative
    z-index: 10
    margin-bottom: 30px
    height: 480px
  &__list
    margin-bottom: 40px
</style>
