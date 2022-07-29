<template>
  <section class="collection">
    <base-section-heading :stick="false">Collections</base-section-heading>
    <div
      class="collection__october collection__block"
      @click="$router.push('/october-collection')"
    >
      <span class="october__number">10</span>
      <div class="october__title">
        <span class="october__title__name">October</span>
        <span class="october__title__name">Collection</span>
      </div>
    </div>
    <div class="collection__autumn collection__block">
      <div class="autumn__title">
        <span class="autumn__title__name">Autumn</span>
        <span class="autumn__title__name">Collection</span>
      </div>
    </div>
    <video
      class="collection__video"
      poster="/assets/homepage/collections/preview-collection.jpg"
    ></video>
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
</script>

<style lang="sass" scoped>
.collection
	padding: 20px 0
	display: flex
	flex-direction: column
	align-items: center
	&__block
		margin-bottom: 40px
	&__october
		width: 100vw
		height: 245px
		background: url('/public/assets/homepage/collections/october-collection.jpg') no-repeat
		background-size: cover
		position: relative
	&__autumn
		height: 300px
		width: 260px
		background: url('/public/assets/homepage/collections/autumn-collection.jpg') no-repeat
		padding-top: 33px
		padding-left: 60px
	&__video
		width: 100vw

.october
	&__number
		position: absolute
		right: 65px
		bottom: -30px
		z-index: 10
		font-family: 'Bodoni Moda', serif
		font-style: italic
		font-weight: 800
		font-size: 162px
		line-height: 244px
		letter-spacing: -31.5px
		opacity: 0.5
		color: #333333
		mix-blend-mode: multiply
	&__title
		display: flex
		flex-direction: column
		position: absolute
		right: 25px
		bottom: 65px
		z-index: 15
		&__name
			color: #FFFFFF
			font-size: 13px
			line-height: 29px
			letter-spacing: 6px
			text-transform: uppercase
			color: #FCFCFC
			&:first-child
				margin-bottom: -20px
				font-family: 'Bodoni Moda', serif
				text-transform: none
				font-style: italic
				letter-spacing: 0px
				font-weight: 700
				font-size: 42px
				line-height: 63px

.autumn
	&__title
		display: flex
		flex-direction: column
		align-items: center
		&__name
			font-size: 11px
			line-height: 25px
			letter-spacing: 5px
			text-transform: uppercase
			color: #333333
			&:first-child
				margin-bottom: -20px
				font-family: 'Bodoni Moda', serif
				font-style: italic
				font-weight: 700
				font-size: 42px
				line-height: 63px
				letter-spacing: -1px
				text-transform: none
				opacity: 0.8
				mix-blend-mode: multiply
</style>
