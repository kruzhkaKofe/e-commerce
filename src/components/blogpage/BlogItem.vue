<template>
  <ion-item class="blog" :router-link="`/blogs/${blog.id}`">
    <div class="blog__cover">
      <ion-img class="blog__image" :src="blog.image" :alt="blog.id"></ion-img>
      <div class="blog__title">
        <h3 class="blog__title__text">{{ blog.title }}</h3>
      </div>
      <ion-checkbox class="blog__add-favourite"></ion-checkbox>
    </div>
    <div class="blog__info">
      <div class="blog__tags">
        <ion-chip class="blog__chip" v-for="(tag, i) in blog.tags" :key="i">
          <ion-label>{{ tag }}</ion-label>
        </ion-chip>
      </div>
      <span class="blog__create-date">{{ blog.date }}</span>
    </div>
  </ion-item>
</template>

<script setup>
import { IonItem, IonImg, IonChip, IonLabel, IonCheckbox } from "@ionic/vue";
import { IconBookmark } from "@/components/icons/index";

const props = defineProps({
  blog: Object,
});
</script>

<style lang="sass" scoped>
.blog
	--inner-padding-end: 0
	--inner-border-width: 0
	--background: #FFFFFF
	width: 100%
	max-width: 350px
	margin-bottom: 28px
	&:last-child
		margin-bottom: 0
	&::part(native)
		padding: 0
		display: flex
		flex-direction: column
	&__cover,
	&__image
		width: 100%
		height: 200px
	&__image::part(image)
		object-fit: cover
	&__cover
		position: relative
	&__title
		position: absolute
		width: 100%
		bottom: 0
		left: 0
		padding-left: 14px
		padding-right: 31px
		padding-bottom: 14px
		text-transform: uppercase
		color: #FCFCFC
		background: linear-gradient(360deg, #111111 0%, rgba(17, 17, 17, 0.991353) 6.6%, rgba(17, 17, 17, 0.96449) 13.19%, rgba(17, 17, 17, 0.91834) 19.79%, rgba(17, 17, 17, 0.852589) 26.38%, rgba(17, 17, 17, 0.768225) 32.98%, rgba(17, 17, 17, 0.668116) 39.57%, rgba(17, 17, 17, 0.557309) 46.17%, rgba(17, 17, 17, 0.442691) 52.77%, rgba(17, 17, 17, 0.331884) 59.36%, rgba(17, 17, 17, 0.231775) 65.96%, rgba(17, 17, 17, 0.147411) 72.55%, rgba(17, 17, 17, 0.0816599) 79.15%, rgba(17, 17, 17, 0.03551) 85.74%, rgba(17, 17, 17, 0.0086472) 92.34%, rgba(17, 17, 17, 0) 98.94%)
		&__text
			font-size: 14px
			line-height: 20px
			letter-spacing: 2px
	&__add-favourite
		position: absolute
		top: 10px
		right: 15px
		// --background: #FFFFFF
		--border-width: 0
		--background-hover: transparent
		--checkmark-width: 0
		&::part(container)
			display: flex
			align-items: center
			justify-content: cente
			// position: relative
			width: 24px
			height: 24px
			background-image: url('/public/assets/icons/Bookmark.svg')
			background-size: cover
			background-color: transparent
		&:checked &::part(container)
			background-image: url('/public/assets/icons/Bookmark.svg')

		// &::part(mark)
			// width: 24px
			// height: 24px
			// position: absolute
			// top: 0
			// left: 0
			// d: path("M9 12.5366L15 16.7033V2.94141H3V16.7033L9 12.5366Z")
			// stroke: #DD8560
			// fill: #DD8560

	&__info
		width: 100%
		display: flex
		align-items: center
		justify-content: space-between
		padding-top: 8px
		font-size: 12px
		line-height: 20px
		color: #888888
	&__tags
		max-width: 265px
		max-height: 70px
		overflow: hidden
	&__chip
		margin-bottom: 3px
		padding: 2px 6px
		border: 1px solid #F5F5F5
		--color: #888888
		--background: transparent
		margin-right: 5px
		&:last-child
			margin-right: 0
</style>
