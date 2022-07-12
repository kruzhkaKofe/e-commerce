<template>
  <div class="recommendation">
    <base-section-heading>Just for you</base-section-heading>
    <swiper
      class="recommendation__slider"
      :slidesPerView="'auto'"
      :spaceBetween="15"
      :modules="modules"
      :pagination="{
				el: '.recommendation__pagination',
			}"
    >
      <swiper-slide
        v-for="rec in recs"
        :key="rec.id"
        class="recommendation__item"
      >
        <ion-img
          class="recommendation__item__image"
          :src="rec.image"
          :key="rec.id"
        ></ion-img>
        <div class="recommendation__item__description">
          <span class="recommendation__item__title">{{ rec.title }}</span>
          <span class="recommendation__item__price">{{ rec.price }}</span>
        </div>
      </swiper-slide>
      <div class="recommendation__pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { IonImg } from "@ionic/vue";
import BaseSectionHeading from "@/components/base/BaseSectionHeading";

const modules = [Pagination];

const props = defineProps({
  recs: Array,
});
</script>

<style lang="sass" scoped>
.recommendation
	padding: 30px 0
	&__slider
		padding: 20px 0
		padding-left: 15px
	&__item
		width: 255px
		height: 390px
		margin-bottom: 15px
		&__image
			width: 255px
			height: 312px
			margin-bottom: 5px
		&__description
			display: flex
			flex-direction: column
			align-items: center
			text-align: center
			font-size: 16px
			line-height: 24px	
		&__price
			color: #DD8560
	&__pagination
		display: flex
		align-items: center
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
