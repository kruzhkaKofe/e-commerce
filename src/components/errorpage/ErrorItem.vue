<template>
  <div class="item">
    <icon-manikin class="item__icon" />
    <p class="item__text">
      We can't find the page you looking for, it will return to the
    </p>
    <ion-button class="item__button" @click="$router.push('/home')">
      <icon-forward-arrow class="item__arrow" />
      <ion-label class="item__label">Home page</ion-label>
    </ion-button>
  </div>
</template>

<script setup>
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
	&__button
		backdrop-filter: blur(4px)
		font-size: 16px
		line-height: 24px
		--padding-top: 8px
		--padding-bottom: 8px
		--padding-start: 30px
		--padding-end: 30px
		--background: #000000
		--border-radius: 0
		--color: #FCFCFC
	&__arrow 
		margin-right: 8px
		transform: rotate(180deg)

:deep(.item__arrow) path,
:deep(.item__arrow) line
	stroke: #FCFCFC
</style>
