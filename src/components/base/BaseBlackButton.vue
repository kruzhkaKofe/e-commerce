<template>
  <ion-button class="button">
		<slot></slot>
  </ion-button>
</template>

<script setup>
import { IonButton } from "@ionic/vue";
</script>

<style lang="sass" scoped>
.button
	height: 56px
	width: 100%
	font-size: 16px
	line-height: 26px
	letter-spacing: 0.01em
	text-transform: uppercase
	--color: #FCFCFC
	--background: #000000
	--border-radius: 0
</style>
