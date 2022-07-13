<template>
  <section class="follow">
    <base-section-heading :stick="false">Follow Us</base-section-heading>
    <router-link class="follow__link" to="/#">
      <icon-instagram></icon-instagram>
    </router-link>
    <div class="follow__links-container">
      <router-link
        class="follow__item"
        v-for="link in links"
        :key="link.id"
        to="/#"
      >
        <ion-img
          class="follow__item__image"
          :src="link.image"
          alt="link-image"
        ></ion-img>
        <div class="follow__item__link">{{ link.path }}</div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { IconInstagram } from "@/components/icons/index";
import { IonImg } from "@ionic/vue";
import BaseSectionHeading from "@/components/base/BaseSectionHeading";

const links = [
  {
    id: 1,
    image: "/assets/homepage/follow/first.jpg",
    path: "@mia",
  },
  {
    id: 2,
    image: "/assets/homepage/follow/second.jpg",
    path: "@_jihyn",
  },
  {
    id: 3,
    image: "/assets/homepage/follow/third.jpg",
    path: "@mia",
  },
  {
    id: 4,
    image: "/assets/homepage/follow/fourth.jpg",
    path: "@_jihyn",
  },
];
</script>

<style lang="sass" scoped>
.follow
	display: flex
	flex-direction: column
	align-items: center
	padding: 20px 17px
	&__link
		margin-top: -15px
		width: 24px
		height: 24px
		display: flex
		align-items: center
		justify-content: center
	&__links-container
		width: 343px
		margin-top: 20px
		display: flex
		flex-wrap: wrap
		justify-content: space-between
		align-items: center
	&__item
		position: relative
		width: 164px
		height: 164px
		margin-bottom: 15px
		&:nth-last-child(-n+2)
			margin-bottom: 0px
		&__image
			width: 164px
			height: 164px
		&__link
			position: absolute
			display: flex
			align-items: center
			padding: 0 9px
			background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)
			width: 100%
			height: 40px
			bottom: 0
			left: 0
			font-size: 14px
			line-height: 16px
			letter-spacing: 1px
			color: #FFFFFF
</style>
