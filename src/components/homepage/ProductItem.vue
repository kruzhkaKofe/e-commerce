<template>
  <article class="item">
    <ion-img
      class="item__img"
      :src="product.image"
      :alt="product.title"
    ></ion-img>
    <div class="item__description">
      <span class="item__title">{{ product.title }}</span>
      <span class="item__price">{{ product.price }}</span>
    </div>
  </article>
</template>

<script setup>
import { IonImg } from "@ionic/vue";

const props = defineProps({
  product: Object,
});
</script>

<style lang="sass" scoped>
.item
	width: 165px
	height: 265px
	margin-bottom: 12px
	&:nth-last-child(-n+2)
		margin-bottom: 0
	&__img
		height: 200px
		width: 165px
	&__description
		height: calc( 265px - 200px )
		padding-top: 3px
		text-align: center
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: center
	&__title
		font-size: 12px
		line-height: 16px
	&__price
		font-size: 15px
		line-height: 24px
		color: #DD8560
</style>
