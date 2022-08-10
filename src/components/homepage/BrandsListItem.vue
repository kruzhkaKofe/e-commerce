<template>
	<div class="brand">
		<ion-img
			class="brand__img"
			:alt="brand.name"
			:src="brand.image"
		></ion-img>
	</div>
</template>

<script setup>
import { IonImg } from "@ionic/vue";

const props = defineProps({
	brand: Object
})
</script>

<style lang="sass" scoped>
.brand
	display: flex
	align-items: center
	justify-content: center
	width: calc( 100%/3 )
</style>