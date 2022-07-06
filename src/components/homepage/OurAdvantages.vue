<template>
  <div class="advantages">
    <ion-img
      class="advantages__logo"
      src="/assets/icons/Logo.png"
      alt="Logo"
    ></ion-img>
    <p class="advantages__title">
      Making a luxurious lifestyle accessible for a generous group of women is
      our daily drive.
    </p>
    <icon-stick class="advantages__stick"></icon-stick>
    <div class="advantages__list">
      <div
        v-for="advantage in advantages"
        :key="advantage.id"
        class="advantages__item"
      >
        <ion-img
          class="advantages__image"
          :src="advantage.image"
          :alt="advantage.id"
        ></ion-img>
        <p class="advantages__description">{{ advantage.description }}</p>
      </div>
    </div>
    <ion-img src="/assets/homepage/advantages/Tape.png" alt=""></ion-img>
  </div>
</template>

<script setup>
import { IonImg } from "@ionic/vue";
import { IconStick } from "@/components/icons/index";

const advantages = [
  {
    id: 1,
    image: "/assets/homepage/advantages/Fast-shipping.png",
    description: "Fast shipping. Free on orders over $25.",
  },
  {
    id: 2,
    image: "/assets/homepage/advantages/Sustainable.png",
    description: "Sustainable process from start to finish.",
  },
  {
    id: 3,
    image: "/assets/homepage/advantages/Unique-design.png",
    description: "Unique designs and high-quality materials.",
  },
  {
    id: 4,
    image: "/assets/homepage/advantages/Heart-crown.png",
    description: "Fast shipping. Free on orders over $25.",
  },
];
</script>

<style lang="sass" scoped>
.advantages
	padding: 30px 15px
	background: rgba(242, 242, 242, 0.5)
	display: flex
	flex-direction: column
	align-items: center
	&__logo
		height: 40px
		width: 96px
		margin-bottom: 15px
	&__title
		width: 285px
		font-size: 14px
		line-height: 20px
		text-align: center
		letter-spacing: 0.01em
		color: #555555
		margin-bottom: 10px
	&__stick
		margin-bottom: 15px
	&__list
		display: flex
		flex-wrap: wrap
		align-items: center
		margin-bottom: 20px
	&__item
		width: calc( 100%/2 )
		display: flex
		flex-direction: column
		align-items: center
		text-align: center
		margin-bottom: 20px
		padding: 0 10px
	&__image
		width: 55px
		height: 35px
		margin-bottom: 12px
	&__description
		font-size: 13px
		line-height: 20px
		color: #555555
</style>
