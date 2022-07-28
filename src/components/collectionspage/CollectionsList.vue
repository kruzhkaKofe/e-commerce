<template>
  <section class="october">
    <ion-list class="october__list">
      <collection-item
        class="october__item"
        v-for="collection in collections"
        :key="collection.id"
        :collection="collection"
      />
    </ion-list>
  </section>
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
	background-color: #000000
	padding: 30px 16px

	&__list
		background: #000000

	&__item
		& + &
			margin-top: 40px
</style>
