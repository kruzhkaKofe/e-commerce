<template>
	<article class="article">
		<ion-img class="article__cover" :src="blog.image" :alt="blog.title"></ion-img>
		<div class="article__content">
			<h3 class="article__title">{{ blog.title }}</h3>
			<p class="article__text_before">{{blog.contentBefore}}</p>
			<swiper 
				class="swiper" 
				:modules="modules" 
				:pagination="{
					el: '.swiper__pagination',
				}"
				>
				<swiper-slide v-for="(image, i) in blog.sliderImages" :key="i" class="swiper__slide">
					<ion-img class="swiper__slide__image" :src="image" :alt="i"></ion-img>
				</swiper-slide>
				<div class="swiper__pagination"></div>
			</swiper>
			<p class="article__text_after">{{blog.contentAfter}}</p>
			<div class="article__info">
				<span class="article__author">Posted by {{blog.author}}</span>
				<span class="article__create-date">{{ blog.date }}</span>
			</div>
			<div class="article__tags">
				<ion-chip v-for="(tag, i) in blog.tags" :key="i" class="article__tag">{{ tag }}</ion-chip>
			</div>
		</div>
		
	</article>
</template>

<script setup>
import {IonImg, IonChip} from '@ionic/vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const props = defineProps({
	blog: Object,
})

</script>

<style lang="sass" scoped>
.article
	&__content 
		padding: 16px
		font-size: 14px
		line-height: 24px
	&__title
		font-size: 14px
		line-height: 22px
		text-transform: uppercase
		margin-bottom: 10px
	&__text_before,
	&__text_after
		color: #333333
		text-align: justify
	&__info
		color: #555555
		margin-top: 30px
		margin-bottom: 10px
		display: flex
		align-items: center
	&__author
		padding-right: 10px
		border-right: 1px solid #555555
		margin-right: 10px

	&__tags
		display: flex
		align-items: center
		flex-wrap: wrap

	&__tag
		margin-right: 10px
		margin-bottom: 10px
		--background: transparent
		--color: #888888
		font-size: 12px
		line-height: 20px
		padding: 6px 15px
		border: 1px solid  #F5F5F5
		&:last-child
			margin-right: 0

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