<template>
  <base-october-section>
    <collections-list :collections="collections" />
  </base-october-section>
</template>

<script setup>
import BaseOctoberSection from "@/components/base/BaseOctoberSection";
import CollectionsList from "@/components/collectionspage/CollectionsList";

const props = defineProps({
  collections: Array,
});
</script>

<style lang="sass" scoped></style>
