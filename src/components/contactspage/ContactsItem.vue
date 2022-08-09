<template>
  <div class="contact">
    <ion-img class="contact__image" :src="contact.icon" :alt="contact.id" />
    <p class="contact__text">{{ contact.text }}</p>
    <base-black-button-small
      v-if="contact.button_text"
      @click="$router.push('/#')"
      >{{ contact.button_text }}</base-black-button-small
    >
  </div>
</template>

<script setup>
import BaseBlackButtonSmall from "@/components/base/BaseBlackButtonSmall";
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
</style>
