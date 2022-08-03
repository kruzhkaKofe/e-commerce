<template>
  <ion-menu side="start" content-id="menu" menu-id="first">
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-menu-toggle slot="start" menu="first">
          <ion-button class="close-button">
            <icon-close></icon-close>
          </ion-button>
        </ion-menu-toggle>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-segment class="segment" value="Women">
        <ion-segment-button
          class="segment__button"
          v-for="(gender, i) in genders"
          :key="i"
          :tab="gender"
          :value="gender"
        >
          <ion-label class="segment__label">{{ gender }}</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-accordion-group :multiple="true">
        <ion-accordion
          class="accordion"
          v-for="accordion in accordions"
          :key="accordion.id"
          :value="accordion.title"
        >
          <ion-item
            class="accordion__item"
            slot="header"
            color="transparent"
            lines="none"
          >
            <ion-label class="accordion__label">{{
              accordion.title
            }}</ion-label>
          </ion-item>
          <ion-list class="accordion__list" slot="content">
            <router-link
              class="accordion__link"
              :to="`#${item}`"
              v-for="(item, idx) in accordion.list"
              :key="idx"
              >{{ item }}</router-link
            >
          </ion-list>
        </ion-accordion>
      </ion-accordion-group>
      <div class="contacts ion-padding">
        <div class="contacts__item">
          <icon-phone />
          <router-link to="#" class="contacts__link"
            >(786) 713-8616</router-link
          >
        </div>
        <div class="contacts__item">
          <icon-location-pin />
          <router-link to="#" class="contacts__link">Store locator</router-link>
        </div>
      </div>
      <div class="menu-footer">
        <icon-stick class="menu-footer__stick" />
        <div class="socials">
          <router-link class="socials__link" to="/#"
            ><icon-twitter-dark
          /></router-link>
          <router-link class="socials__link" to="/#"
            ><icon-instagram-dark
          /></router-link>
          <router-link class="socials__link" to="/#"
            ><icon-youtube-dark
          /></router-link>
        </div>
      </div>
    </ion-content>
  </ion-menu>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonButtons,
  IonButton,
  IonMenuToggle,
  IonMenu,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";

import {
  IconClose,
  IconPhone,
  IconLocationPin,
  IconTwitterDark,
  IconInstagramDark,
  IconYoutubeDark,
  IconStick,
} from "@/components/icons/index.js";

const genders = ["Women", "Man", "Kids"];

const accordions = [
  {
    id: 1,
    title: "New",
    list: ["New 1", "New 2", "New 3", "New 4", "New 5"],
  },
  {
    id: 2,
    title: "Apparel",
    list: [
      "Outer",
      "Dress",
      "Blounse/Shirt",
      "T-shirt",
      "Knitwear",
      "Skit",
      "Pants",
      "Denim",
      "Kids",
    ],
  },
  {
    id: 3,
    title: "Bag",
    list: [
      "Clutches",
      "Backpacks",
      "Hobo bags",
      "Briefcases",
      "Shoulder bags",
      "Handbags",
    ],
  },
  {
    id: 4,
    title: "Shoes",
    list: [
      "Sheakers",
      "Boots",
      "Slippers",
      "Sandals",
      "Running shoes",
      "Cowboy boots",
    ],
  },
  {
    id: 5,
    title: "Accessories",
    list: [
      "Chains",
      "Rings",
      "Earrings",
      "Pins",
      "Bangle",
      "Watches",
      "Ties",
      "Belts",
    ],
  },
];
</script>

<style lang="sass" scoped>
ion-header::after
	height: 0

.segment
	--background: #FFFFFF
	&__button
		font-size: 14px
		line-height: 34px
		letter-spacing: 3px
		text-transform: uppercase
		--color: rgba(136, 136, 136, 0.8)
		--color-checked: #212806
		--ripple-color: transparent
		&::part(indicator)
			position: relative
			padding-bottom: 8.5px
		&::part(indicator)::before
			position: absolute
			bottom: 5px
			background-color: #DD8560
			content: ''
			width: 10px
			height: 10px
			left: calc(50%)
			transform: translate(-50%) rotate(45deg)
		&::part(indicator-background)
			background-color: #DD8560

.accordion
	background: #FFFFFF
	&__label
		font-size: 16px
		line-height: 48px
		--color: #333333
	&__list
		background: #FFFFFF
		display: flex
		flex-direction: column
		padding: 0px 36px
	&__link
		font-size: 16px
		line-height: 46px
		text-transform: capitalize
		color: #333333
		text-decoration: none

:deep(.ion-accordion-toggle-icon)
	content: url('/public/assets/icons/arrow-down.svg')

.contacts
	&__item
		display: flex
		align-items: center
		& + &
			margin-top: 15px
	&__link
		margin-left: 15px
		font-size: 16px
		line-height: 34px
		color: #555555
		text-decoration: none

.menu-footer
	display: flex
	flex-direction: column
	align-items: center
	&__stick
		margin-top: 10px

.socials
	margin-top: 25px
	width: 150px
	display: flex
	align-items: center
	justify-content: space-between
</style>
