<template>
  <ion-card class="card">
    <ion-img class="card__image" :src="item.image" :alt="item.title" />
    <div class="card__description">
      <ion-card-header class="card__header">
        <ion-card-title class="card__title">{{ item.title }}</ion-card-title>
        <ion-card-subtitle class="card__subtitle">{{
          item.description
        }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content class="card__content">
        <div class="card__counter">
          <ion-button class="card__button" @click="decrement(item)">
            <icon-minus />
          </ion-button>
          <span class="card__amount">{{ item.volume }}</span>
          <ion-button class="card__button" @click="increment(item)">
            <icon-plus />
          </ion-button>
        </div>
        <span class="card__price">${{ item.price }}</span>
      </ion-card-content>
    </div>
  </ion-card>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonImg,
} from "@ionic/vue";

import { IconPlus, IconMinus } from "@/components/icons/index.js";

const props = defineProps({
  item: Object,
});

const emit = defineEmits(["increment", "decrement"]);

const increment = (item) => {
  emit("increment", item);
};

const decrement = (item) => {
  emit("decrement", item);
};
</script>

<style lang="sass" scoped>
.card
	background-color: #FFFFFF
	display: flex
	align-items: center
	height: 130px
	box-shadow: none
	border-radius: 0

	&__image
		width: 100px
		height: 130px
		margin-right: 10px

	&__description
		padding: 8px

	&__header
		margin-bottom: 12px

	&__title
		color: #000000
		letter-spacing: 2px
		font-size: 14px
		line-height: 20px
		text-transform: uppercase
		margin-bottom: 6px

	&__subtitle
		text-transform: capitalize
		font-size: 12px
		line-height: 18px
		color: #555555

	&__content
		padding: 0

	&__counter
		display: flex
		align-items: center
		margin-bottom: 12px

	&__amount
		margin: 0 12px
		font-size: 16px
		line-height: 16px
		color: #000000

	&__button
		width: 24px
		height: 24px
		display: flex
		align-items: center
		justify-content: center
		--padding-top: 4px
		--padding-bottom: 4px
		--padding-end: 4px
		--padding-start: 4px
		--background: #FFFFFF
		--border-radius: 50%
		--border-width: 1px
		--border-style: solid
		--border-color: rgba(196, 196, 196, 0.8)

	&__price
		line-height: 24px
		color: #DD8560
</style>
