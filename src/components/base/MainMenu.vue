<template>
	<ion-menu side="start">
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button class="menu__close-button"></ion-menu-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-tab-bar>
				
			</ion-tab-bar>
			<ion-list>
				<ion-item>1</ion-item>
				<ion-item>2</ion-item>
				<ion-item>3</ion-item>
				<ion-item>4</ion-item>
				<ion-item>5</ion-item>
			</ion-list>
		</ion-content>
	</ion-menu>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
	IonTabBar,
	IonTabButton,
} from "@ionic/vue";

import {IconClose} from '@/components/icons/index.js'

</script>

<style lang="sass" scoped>
ion-toolbar
	--background: #FFFFFF

ion-menu
	--width: 100%

.menu
	&__close-button::part(icon)
		content: url('/public/assets/icons/Close.svg')


</style>