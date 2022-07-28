<template>
	<article class="article">
		<ion-img class="article__cover" :src="blog.image" :alt="blog.title"></ion-img>
		<div class="article__content">
			<h3 class="article__title">{{ blog.title }}</h3>
			<p class="article__text_before">{{blog.contentBefore}}</p>
			<blog-overview-slider :images="blog.sliderImages"></blog-overview-slider>
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
import BlogOverviewSlider from './BlogOverviewSlider.vue'



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


</style>