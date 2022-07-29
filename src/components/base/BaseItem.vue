<template>
  <article class="item">
    <ion-img class="item__image" :src="item.image" :alt="item.title" />
    <div class="item__description">
      <span class="item__collection">{{ collection.title }}</span>
      <span class="item__title">{{ item.title }}</span>
      <span class="item__price">${{ item.price }}</span>
    </div>
  </article>
</template>

<script setup>
import { IonImg } from "@ionic/vue";

const props = defineProps({
  collection: Object,
  item: Object,
});
</script>

<style lang="sass" scoped>
.item
	width: 165px

	&__description
		display: flex
		flex-direction: column
		align-items: center
		padding: 8px 0
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
