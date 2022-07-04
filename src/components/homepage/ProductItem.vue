<template>
	<article class="item">
		<ion-img class="item__img" :src="product.image" :alt="product.title"></ion-img>
		<div class="item__description">
			<h3 class="item__title">{{ product.title }}</h3>
			<span class="item__price">{{ product.price }}</span>
		</div>
	</article>
</template>

<script setup>
import { IonImg, } from "@ionic/vue";

const props = defineProps({
  product: Object,
});

</script>

<style lang="sass" scoped>
.item
	width: 165px
	height: 260px
	margin-bottom: 12px
	&__article
		width: 100%
		height: 100%
	&__img
		height: 200px
		width: 165px
	&__description
		text-align: center
	&__title
		dib
		font-size: 12px
		line-height: 16px
	&__price
		font-size: 15px
		line-height: 24px
		color: #DD8560

</style>
