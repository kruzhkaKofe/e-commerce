<template>
  <div class="item">
    <icon-manikin class="item__icon" />
    <p class="item__text">
      We can't find the page you looking for, it will return to the
    </p>
    <base-black-button-small
      @click="$router.push('/home')"
    >
      <icon-forward-arrow class="item__arrow" />
      Home page
    </base-black-button-small>
  </div>
</template>

<script setup>
import BaseBlackButtonSmall from "@/components/base/BaseBlackButtonSmall";
import { IonButton, IonLabel } from "@ionic/vue";
import { IconManikin, IconForwardArrow } from "@/components/icons/index";
</script>

<style lang="sass" scoped>
.item
	display: flex
	flex-direction: column
	align-items: center
	text-align: center
	&__icon
		margin-bottom: 22px
	&__text
		font-size: 18px
		line-height: 28px
		color: #000000
		margin-bottom: 15px
	&__arrow
		margin-right: 8px
		transform: rotate(180deg)

:deep(.item__arrow) path,
:deep(.item__arrow) line
	stroke: #FCFCFC
</style>
