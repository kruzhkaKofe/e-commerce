<template>
  <ion-list class="list">
    <base-product-item
      v-for="item in collection.items"
      :key="item.id"
      :item="item"
      :collection="collection"
    />
  </ion-list>
</template>

<script setup>
import { IonList } from "@ionic/vue";
import BaseProductItem from "@/components/base/BaseProductItem";

const props = defineProps({
  collection: Object,
});
</script>

<style lang="sass" scoped>
.list
	background: #000000
	padding: 0
	display: flex
	flex-wrap: wrap
	justify-content: space-between

:deep(.item) 
	--background: #000000
</style>
