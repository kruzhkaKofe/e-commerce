<template>
  <div class="contact">
    <ion-img class="contact__image" :src="contact.icon" :alt="contact.id" />
    <p class="contact__text">{{ contact.text }}</p>
    <ion-button
      class="contact__button"
      @click="$router.push('/#')"
      v-if="contact.button_text"
      >{{ contact.button_text }}</ion-button
    >
  </div>
</template>

<script setup>
import { IonImg, IonButton } from "@ionic/vue";

const props = defineProps({
  contact: Object,
});
</script>

<style lang="sass" scoped>
.contact
	padding: 25px 0
	display: flex
	flex-direction: column
	align-items: center
	&__image
		margin-bottom: 16px
	&__text
		text-align: justify
		font-size: 16px
		line-height: 20px
		color: #333333
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
</style>
