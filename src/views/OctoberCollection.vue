<template>
  <base-layout page-default-back-link="/home">
    <collections-list :collections="collections" />
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import CollectionsList from "@/components/collectionspage/CollectionsList";

const collections = [
  {
    id: 1,
    image: "assets/october-collection/01-image.jpg",
    title: "October collection",
  },
  {
    id: 2,
    image: "assets/october-collection/02-image.jpg",
    title: "Black collection",
  },
  {
    id: 3,
    image: "assets/october-collection/03-image.jpg",
    title: "Hae by Haekim",
  },
];
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
