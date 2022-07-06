<template>
  <div class="brands">
    <icon-stick class="brands__stick"></icon-stick>
    <div class="brands__list">
      <div class="brands__item" v-for="brand in brands" :key="brand.id">
        <ion-img
          class="brands__img"
          :alt="brand.name"
          :src="brand.image"
        ></ion-img>
      </div>
    </div>
    <icon-stick class="brands__stick"></icon-stick>
  </div>
</template>

<script setup>
import { IconStick } from "@/components/icons/index";
import { IonImg } from "@ionic/vue";

const brands = [
  {
    id: 1,
    name: "Prada",
    image: "/assets/homepage/brands/Prada.png",
  },
  {
    id: 2,
    name: "Burberry",
    image: "/assets/homepage/brands/Burberry.png",
  },
  {
    id: 3,
    name: "Boss",
    image: "/assets/homepage/brands/Boss.png",
  },
  {
    id: 4,
    name: "Cartier",
    image: "/assets/homepage/brands/Cartier.png",
  },
  {
    id: 5,
    name: "Gucci",
    image: "/assets/homepage/brands/Gucci.png",
  },
  {
    id: 6,
    name: "Tiffany",
    image: "/assets/homepage/brands/Tiffany.png",
  },
];
</script>

<style lang="sass" scoped>
.brands
	display: flex
	flex-direction: column
	align-items: center
	padding: 15px 0
	&__list
		padding: 20px 0
		display: flex
		align-items: center
		justify-content: space-between
		flex-wrap: wrap
		height: 150px
	&__item
		display: flex
		align-items: center
		justify-content: center
		width: calc( 100%/3 )
	&__stick 
		width: 126px
		height: 10px
</style>
