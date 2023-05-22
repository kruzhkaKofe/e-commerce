<template>
  <section class="arrival ion-padding">
    <base-section-heading>Новое поступление</base-section-heading>
    <ion-segment
      class="arrival__segment"
      :swipeGesture="false"
      @ionChange="changeSegment($event)"
      v-model="currentSegment"
    >
      <ion-segment-button
        class="arrival__segment-button"
        v-for="(segment, i) in segments"
        :key="i"
        :value="segment"
      >
        <ion-label class="arrival__segment-label">
          {{ segment }}
        </ion-label>
      </ion-segment-button>
    </ion-segment>
    <div class="arrival__list" v-if="currentSegment === 'Все'">
      <product-item
        class="arrival__item"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="arrival__list" v-else-if="currentSegment === 'Одежда'">
      <product-item
        class="arrival__item"
        v-for="product in products2"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="arrival__list" v-else-if="currentSegment === 'Платья'">
      <product-item
        class="arrival__item"
        v-for="product in products3"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="arrival__list" v-else-if="currentSegment === 'Футболки'">
      <product-item
        class="arrival__item"
        v-for="product in products2"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="arrival__list" v-else-if="currentSegment === 'Сумки'">
      <product-item
        class="arrival__item"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="arrival__list arrival__list_demo" v-else>
      {{ currentSegment }}
    </div>
    <ion-button class="arrival__explore-button" fill="clear" href="/october-collection">
      Узнать больше
      <icon-forward-arrow
        class="arrival__explore-button__icon"
      ></icon-forward-arrow>
    </ion-button>
  </section>
</template>

<script setup>
import {
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
} from "@ionic/vue";
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import ProductItem from "@/components/homepage/ProductItem";
import { IconForwardArrow } from "@/components/icons/index";
import { ref } from "vue";

const segments = ["Все", "Одежда", "Платья", "Футболки", "Сумки"];

const products = [
  {
    id: 1,
    image: "/assets/homepage/arrivals/1-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN",
    price: "120Тг",
  },
  {
    id: 2,
    image: "/assets/homepage/arrivals/2-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN",
    price: "130тг",
  },
  {
    id: 3,
    image: "/assets/homepage/arrivals/3-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN",
    price: "140тг",
  },
  {
    id: 4,
    image: "/assets/homepage/arrivals/4-item.jpg",
    title: "Oblong bag",
    price: "150тг",
  },
];

const products2 = [
  {
    id: 1,
    image: "/assets/homepage/arrivals/2-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN 2",
    price: "120тг",
  },
  {
    id: 2,
    image: "/assets/homepage/arrivals/1-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN 2",
    price: "130тг",
  },
  {
    id: 3,
    image: "/assets/homepage/arrivals/3-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN 2",
    price: "140тг",
  },
  {
    id: 4,
    image: "/assets/homepage/arrivals/4-item.jpg",
    title: "Oblong bag 2",
    price: "150тг",
  },
];
const products3 = [
  {
    id: 1,
    image: "/assets/homepage/arrivals/3-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN 2",
    price: "120тг",
  },
  {
    id: 2,
    image: "/assets/homepage/arrivals/1-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN 2",
    price: "130тг",
  },
  {
    id: 3,
    image: "/assets/homepage/arrivals/2-item.jpg",
    title: "двусторонний кардиган из ангоры 21WN 2",
    price: "140тг",
  },
  {
    id: 4,
    image: "/assets/homepage/arrivals/4-item.jpg",
    title: "Oblong bag 2",
    price: "150тг",
  },
];

let currentSegment = ref("Все");

const changeSegment = (e) => {
  currentSegment = e.detail.value;
};
</script>

<style lang="sass" scoped>
.arrival
	color: black
	text-align: center
	border: none
	&__segment
		--background: #FFFFFF
		margin-bottom: 15px
		&-button
			text-transform: capitalize
			font-size: 14px
			line-height: 106%
			letter-spacing: 1px
			--color: rgba(136, 136, 136, 0.8)
			--color-checked: #212806
			--ripple-color: transparent
			--border-width: 0px
			min-width: auto
			&::part(native)
				height: 48px
			&::part(indicator)
				content: url('/public/assets/icons/tabs-underline.svg')
				width: 12px
				left: calc(50% - 6px)
			&::part(indicator-background)
				background-color: #DD8560
		&-label
			display: flex
			align-items: center
			height: 100%
	&__list
		display: flex
		flex-wrap: wrap
		justify-content: space-between
		margin-bottom: 28px
		&_demo
			height: 520px
			align-items: center
			justify-content: center
	&__item
		margin-bottom: 16px
		&:nth-last-child(-n+2)
			margin-bottom: 0
	&__explore-button
		--color: black
		font-size: 16px
		line-height: 24px
		--ripple-color: #DD8560
		&__icon
			margin-left: 8px

.ios .arrival__segment-button::part(indicator)
	inset: 100% 0px 0px 50%
	transform: translate(-50%, -100%)
</style>
