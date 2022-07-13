<template>
  <ion-item class="item">
    <div class="item__cover">
      <ion-img class="item__image" :src="blog.image" :alt="blog.id"></ion-img>
      <div class="item__title">
        <h3 class="item__title__text">{{ blog.title }}</h3>
      </div>
			<ion-checkbox class="item__add-favourite">
				<icon-bookmark class="item__bookmark" />
			</ion-checkbox>
    </div>
    <div class="item__info">
      <div class="item__tags">
        <ion-chip class="item__chip" v-for="(tag, i) in blog.tags" :key="i">
          <ion-label>{{ tag }}</ion-label>
        </ion-chip>
      </div>
      <span class="item__create-date">{{ blog.date }}</span>
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
.item
	--inner-padding-end: 0
	--inner-border-width: 0
	width: 343px
	margin-bottom: 28px
	&:last-child
		margin-bottom: 0
	&::part(native)
		padding: 0
		display: flex
		flex-direction: column
	&__cover,
	&__image
		width: 343px
		height: 200px
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
		top: 13px
		right: 13px
		// --background: transparent
		--border-width: 0
		--background-hover: transparent
		--background-checked: #DD8560
	&__info
		width: 100%
		display: flex
		align-items: center
		justify-content: space-between
		padding-top: 8px
		font-size: 12px
		line-height: 20px
		color: #888888
	&__chip
		padding: 2px 6px
		border: 1px solid #F5F5F5
		--color: #888888
		--background: transparent
		& + &
			margin-left: 10px

// .favourite :deep(.item__bookmark) path
// 	fill: #DD8560
// 	stroke: #DD8560

</style>
