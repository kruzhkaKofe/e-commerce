<template>
  <swiper class="swiper" :slidesPerView="'auto'" :spaceBetween="15">
    <swiper-slide
      @click="$router.push(`/october-collection/${collection.id}`)"
      class="slide"
      v-for="collection in otherCollections"
      :key="collection.id"
    >
      <ion-img
        class="slide__image"
        :src="collection.cover"
        :alt="collection.title"
      ></ion-img>
      <span class="slide__title">{{ collection.title }}</span>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { IonImg } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const props = defineProps({
  otherCollections: Array,
});
</script>

<style lang="sass" scoped>
.slide
	width: 254px

	&__image
		object-fit: cover
		width: 254px
		height: 300px
		margin-bottom: 7px

	&__title
		font-size: 13px
		line-height: 29px
		letter-spacing: 2px
		text-transform: uppercase
		color: #FCFCFC
		mix-blend-mode: normal
</style>
