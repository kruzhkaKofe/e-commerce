<template>
	<div class="base__header">
		<h2 class="base__heading"><slot></slot></h2>
		<icon-stick class="base__icon-stick"/>
	</div>
</template>

<script setup>
import { IconStick } from "@/components/icons/index";
</script>

<style lang="sass" scoped>
.base
	&__header
		margin-bottom: 6px
		display: flex
		flex-direction: column
	&__heading
		font-weight: 400
		font-size: 18px
		line-height: 40px
		letter-spacing: 4px
		text-transform: uppercase
	&__icon-stick
		align-self: center
		display: block
		width: 126px
	
</style>