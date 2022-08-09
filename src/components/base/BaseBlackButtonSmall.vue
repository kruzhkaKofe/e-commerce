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
</style>
