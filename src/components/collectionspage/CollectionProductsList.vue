<template>
	<ion-list class="list">
		<base-product-item
			class="item"
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
	display: flex
	flex-wrap: wrap
	justify-content: space-between

.item
	margin-bottom: 16px
	&:nth-last-child(-n+2)
		margin-bottom: 0

:deep(.item)
	--background: #000000
</style>
