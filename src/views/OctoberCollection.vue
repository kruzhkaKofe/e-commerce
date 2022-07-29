<template>
  <base-layout page-default-back-link="/home">
    <collection-section :collections="collections" />
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import CollectionSection from "@/components/collectionspage/CollectionSection";
import { useCollections } from "@/stores/collections.js";

const store = useCollections();

const collections = store.allOctober;
</script>

<style lang="sass" scoped>
:deep(ion-toolbar)
	--border-color: #000000
	--background: #000000

:deep(.icon-menu) path,
:deep(.icon-search) path,
:deep(.icon-shopping-bag) path
	stroke: #FCFCFC

:deep(.logo)
	content: url('/public/assets/icons/Logo-light.png')
</style>
