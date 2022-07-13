<template>
  <section class="blog">
    <base-section-heading>Blog</base-section-heading>
    <tags-list :tags="tags"></tags-list>
    <blog-list :blogs="blogs"></blog-list>
    <ion-button class="blog__button">
      Load more
      <icon-plus class="blog__button__icon"></icon-plus>
    </ion-button>
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import TagsList from "./TagsList.vue";
import BlogList from "./BlogList.vue";
import { IonButton } from "@ionic/vue";
import { IconPlus } from "@/components/icons/index"

const props = defineProps({
  blogs: Array,
  tags: Array,
})
</script>

<style lang="sass" scoped>
.blog
	padding: 30px 0
	text-align: center
	&__button
		display: inline-block
		margin-top: 15px
		font-size: 16px
		line-height: 24px
		text-transform: uppercase
		--padding-top: 12px
		--padding-bottom: 12px
		--padding-start: 33px
		--padding-end: 33px
		--background: transparent
		--border-radius: 0
		--border-width: 1px
		--border-style: solid
		--border-color: #DEDEDE
		--color: #000000
		--background-activated: #DD8560
		--ripple-color: #DD8560
		&__icon
			margin-left: 16px
</style>
