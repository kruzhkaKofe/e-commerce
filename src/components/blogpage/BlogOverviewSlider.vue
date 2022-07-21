<template>
  <swiper
    class="swiper"
    :modules="modules"
    :pagination="{
      el: '.swiper__pagination',
    }"
  >
    <swiper-slide v-for="(image, i) in images" :key="i" class="swiper__slide">
      <ion-img class="swiper__slide__image" :src="image" :alt="i"></ion-img>
    </swiper-slide>
    <div class="swiper__pagination"></div>
  </swiper>
</template>

<script setup>
import { IonImg } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const props = defineProps({
  images: Array,
});
</script>

<style lang="sass" scoped>
.swiper
	margin-top: 15px
	&__pagination
		margin: 15px 0
		display: flex
		justify-content: center

:deep(.swiper-pagination-bullet)
	width: 6px
	height: 6px
	border: 0.5px solid #888888
	background-color: #FFFFFF
	border-radius: 0
	transform: rotate(45deg)

:deep(.swiper-pagination-bullet-active)
	background-color: #888888
</style>
