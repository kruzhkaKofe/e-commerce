<template>
  <ion-list class="october__list ion-padding">
    <collection-item
      class="october__item"
      v-for="collection in collections"
      :key="collection.id"
      :collection="collection"
    />
  </ion-list>
</template>

<script setup>
import CollectionItem from "@/components/collectionspage/CollectionItem";
import { IonList } from "@ionic/vue";

const props = defineProps({
  collections: Array,
});
</script>

<style lang="sass" scoped>
.october
	&__list
		background: #000000
		padding-top: 0
		padding-bottom: 0
	&__item
		& + &
			margin-top: 40px
</style>
