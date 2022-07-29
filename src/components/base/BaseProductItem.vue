<template>
  <ion-item class="item">
    <ion-img class="item__image" :src="item.image" :alt="item.title" />
    <div class="item__description">
      <span class="item__collection">{{ collection.title }}</span>
      <span class="item__title">{{ item.title }}</span>
      <span class="item__price">${{ item.price }}</span>
    </div>
  </ion-item>
</template>

<script setup>
import { IonItem, IonImg } from "@ionic/vue";

const props = defineProps({
  collection: Object,
  item: Object,
});
</script>

<style lang="sass" scoped>
.item
	width: 165px
	--inner-padding-end: 0
	--inner-border-width: 0
	--highlight-height: 0
	margin-bottom: 20px

	&::part(native)
		display: flex
		flex-direction: column
		padding: 0

	&:nth-last-child(-n+2)
		margin-bottom: 0

	&__description
		width: 100%
		display: flex
		flex-direction: column
		align-items: center
		padding-top: 8px
		font-size: 12px
		line-height: 18px
		color: #FCFCFC

	&__title
		color: #F9F9F9
		opacity: 0.5

	&__price
		font-size: 15px
		line-height: 24px
		color: #DD8560
</style>
