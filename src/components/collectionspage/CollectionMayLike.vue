<template>
  <div class="may-like">
    <base-section-heading>You may also like</base-section-heading>
    <collection-may-like-slider :otherCollections="otherCollections" />
  </div>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import CollectionMayLikeSlider from "@/components/collectionspage/CollectionMayLikeSlider";

const props = defineProps({
  otherCollections: Array,
});
</script>

<style lang="sass" scoped>
:deep(.base__icon-stick) path
	fill: #FCFCFC
:deep(.base__heading)
	color: #FCFCFC
</style>
