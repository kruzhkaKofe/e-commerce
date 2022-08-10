<template>
  <div class="brands ion-padding">
    <icon-stick class="brands__stick"></icon-stick>
    <div class="brands__list">
      <brands-list-item
        v-for="brand in brands"
        :key="brand.id"
        :brand="brand"
      ></brands-list-item>
    </div>
    <icon-stick class="brands__stick"></icon-stick>
  </div>
</template>

<script setup>
import { IconStick } from "@/components/icons/index";
import BrandsListItem from "@/components/homepage/BrandsListItem";

const props = defineProps({
  brands: Array,
});
</script>

<style lang="sass" scoped>
.brands
	padding-top: 16px
	padding-bottom: 16px
	display: flex
	flex-direction: column
	align-items: center
	&__list
		padding-top: 20px
		padding-bottom: 20px
		display: flex
		align-items: center
		justify-content: space-between
		flex-wrap: wrap
		height: 150px
</style>
