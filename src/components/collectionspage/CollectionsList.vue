<template>
  <ion-list class="october__list">
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
	position: relative
	background-color: #000000
	padding: 120px 16px 60px
	z-index: 10
	&__list
		background: #000000
		padding: 0
	&__item
		& + &
			margin-top: 40px
</style>
