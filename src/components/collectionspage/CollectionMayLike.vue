<template>
  <section class="may-like">
    <base-section-heading>You may also like</base-section-heading>
    <collection-may-like-slider :otherCollections="otherCollections" />
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import CollectionMayLikeSlider from "@/components/collectionspage/CollectionMayLikeSlider";

const props = defineProps({
  otherCollections: Array,
});
</script>

<style lang="sass" scoped>
.may-like 
  background-color: #000000
:deep(.base__icon-stick) path
  fill: #FCFCFC
:deep(.base__heading)
  color: #FCFCFC
</style>
