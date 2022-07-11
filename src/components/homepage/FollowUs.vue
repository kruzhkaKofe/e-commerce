<template>
  <section class="follow">
    <h2 class="follow__heading">Follow us</h2>
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
        <span class="follow__item__link">{{ link.path }}</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { IconInstagram } from "@/components/icons/index";
import { IonImg } from "@ionic/vue";

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
	&__heading
		font-size: 18px
		line-height: 40px
		letter-spacing: 4px
		text-transform: uppercase
	&__link
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
			bottom: 12px
			left: 10px
			font-size: 14px
			line-height: 16px
			letter-spacing: 1px
			color: #FFFFFF
</style>
