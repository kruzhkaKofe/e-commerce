<template>
	<article class="article">
		<ion-img :src="blog.image" :alt="blog.title"></ion-img>
	</article>
</template>

<script setup>
import {IonImg} from '@ionic/vue'

const props = defineProps({
	blog: Object,
})

</script>

<style lang="sass" scoped>


</style>