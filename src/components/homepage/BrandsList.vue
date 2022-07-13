<template>
  <div class="brands">
    <icon-stick class="brands__stick"></icon-stick>
    <div class="brands__list">
      <brand-item 
				v-for="brand in brands" 
				:key="brand.id" 
				:brand="brand"
			></brand-item>
    </div>
    <icon-stick class="brands__stick"></icon-stick>
  </div>
</template>

<script setup>
import { IconStick } from "@/components/icons/index";
import BrandItem from "@/components/homepage/BrandItem";

const props = defineProps({
  brands: Array,
});
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
</style>
