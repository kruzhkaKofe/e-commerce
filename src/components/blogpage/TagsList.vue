<template>
	<swiper
		class="swiper"
		:slidesPerView="'auto'"
		:spaceBetween="12"
		:freeMode="true"
		:modules="modules"
	>
		<swiper-slide class="swiper__slide" v-for="(tag, i) in tags" :key="i">
			<ion-chip class="swiper__chip">
				<ion-label class="swiper__label">{{ tag }}</ion-label>
			</ion-chip>
		</swiper-slide>
	</swiper>
</template>

<script setup>
import { IonChip, IonLabel } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper";
import "swiper/css";

const modules = [FreeMode];

const props = defineProps({
	tags: Array,
})
</script>

<style lang="sass" scoped>
.swiper
	padding: 0 16px
	margin-bottom: 16px
	&__slide
		width: auto
	&__chip
		padding: 8px 10px
		font-size: 14px
		line-height: 16px
		letter-spacing: 0.01em
		--background: #F9F9F9
		--color: #333333
</style>