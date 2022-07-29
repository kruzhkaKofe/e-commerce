<template>
  <base-layout page-default-back-link="/october-collection">
    <collection-overview
      :collection="loadedCollection"
      :otherCollections="otherCollections"
    />
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import CollectionOverview from "@/components/collectionspage/CollectionOverview";
import { useCollections } from "@/stores/collections.js";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";

const store = useCollections();
const route = useRoute();
const collectionId = ref(route.params.id);

const loadedCollection = store.getCollectionById(collectionId.value);
const otherCollections = store.getOtherCollections(collectionId.value);
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
