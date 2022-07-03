<template>
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button class="menu__open-button"></ion-menu-button>
			</ion-buttons>
			<ion-buttons slot="end">
				<ion-button>
					<ion-icon
						slot="icon-only"
						:src="require('@/assets/icons/Search.svg')"
					></ion-icon>
				</ion-button>
				<ion-button>
					<ion-icon
						slot="icon-only"
						:src="require('@/assets/icons/shopping-bag.svg')"
					></ion-icon>
				</ion-button>
			</ion-buttons>
			<ion-img
				class="logo"
				:src="require('@/assets/icons/Logo.png')"
				alt="logo"
			></ion-img>
		</ion-toolbar>
	</ion-header>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonIcon,
  IonImg,
} from "@ionic/vue";

const props = defineProps({
	background: String
})

</script>

<style lang="sass" scoped>
.menu__open-button::part(icon)
	content: url('@/assets/icons/Menu.svg')

.logo
	width: 78px
	height: 31px
</style>