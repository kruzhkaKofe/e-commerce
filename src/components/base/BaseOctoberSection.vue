<template>
  <section class="october">
    <div class="october__block">
      <span class="october__number">10</span>
      <div class="october__title">
        <span class="october__title__name">October</span>
        <span class="october__title__name">Collection</span>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
.october
	position: relative
	background-color: #000000
	padding-top: 120px !important
	// padding-bottom: 60px
	z-index: 10
	&__block
		position: absolute
		top: -35px
		left: 50%
		transform: translate(-75%, 0%)
	&__number
		z-index: -1
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
		top: 75px
		left: 10%
		z-index: 10
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
				letter-spacing: 2px
				font-weight: 700
				font-size: 42px
				line-height: 63px
</style>
