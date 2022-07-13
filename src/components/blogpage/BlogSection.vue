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
import { IconPlus } from "@/components/icons/index";

const tags = [
  "Fashion",
  "Promo",
  "Policy",
  "Lookbook",
  "Sale",
  "Tips",
  "Fashion",
  "Promo",
  "Policy",
  "Lookbook",
  "Sale",
  "Tips",
];

const blogs = [
  {
    id: 1,
    title: "2021 Style Guide: The Biggest Fall Trends",
    image: "/assets/blogpage/guy.jpg",
    tags: ["#Fashion", "#Tips"],
    date: "4 days ago",
  },
  {
    id: 2,
    title: "2021 Style Guide: The Biggest Fall Trends",
    image: "/assets/blogpage/jacket.jpg",
    tags: ["#Fashion", "#Tips"],
    date: "4 days ago",
  },
  {
    id: 3,
    title: "2021 Style Guide: The Biggest Fall Trends",
    image: "/assets/blogpage/boots.jpg",
    tags: ["#Fashion", "#Tips"],
    date: "4 days ago",
  },
  {
    id: 4,
    title: "2021 Style Guide: The Biggest Fall Trends",
    image: "/assets/blogpage/suit.jpg",
    tags: ["#Fashion", "#Tips"],
    date: "4 days ago",
  },
];
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
