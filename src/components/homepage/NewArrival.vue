<template>
  <section class="arrival">
    <base-section-heading>New Arrival</base-section-heading>
    <ion-segment class="arrival__segment" value="All" :swipeGesture="false">
      <ion-segment-button
        class="arrival__segment-button"
        v-for="(tab, i) in tabs"
        :key="i"
        :tab="tab"
        :value="tab"
      >
        <ion-label class="arrival__segment-label">
          {{ tab }}
        </ion-label>
      </ion-segment-button>
    </ion-segment>
    <div class="arrival__list">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </product-item>
    </div>
    <ion-button class="arrival__explore-button" fill="clear">
      Explore more
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

const tabs = ["All", "Apparel", "Dress", "Tshirt", "Bag"];

const products = [
  {
    id: 1,
    image: "/assets/homepage/arrivals/1-item.jpg",
    title: "21WN reversible angora cardigan",
    price: "$120",
  },
  {
    id: 2,
    image: "/assets/homepage/arrivals/2-item.jpg",
    title: "21WN reversible angora cardigan",
    price: "$130",
  },
  {
    id: 3,
    image: "/assets/homepage/arrivals/3-item.jpg",
    title: "21WN reversible angora cardigan",
    price: "$140",
  },
  {
    id: 4,
    image: "/assets/homepage/arrivals/4-item.jpg",
    title: "Oblong bag",
    price: "$150",
  },
];
</script>

<style lang="sass" scoped>
.arrival
	padding: 35px 0
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
			&::part(indicator)
				content: url('/public/assets/icons/tabs-underline.svg')
				width: 10px
				left: calc(50% - 5px)
			&::part(indicator-background)
				background-color: #DD8560
		&-label
			display: flex
			align-items: center
			height: 100%
	&__list
		display: flex
		flex-wrap: wrap
		justify-content: space-around
		margin-bottom: 28px
	&__explore-button
		--color: black
		font-size: 16px
		line-height: 24px
		--ripple-color: #DD8560
		&__icon
			margin-left: 8px
</style>
