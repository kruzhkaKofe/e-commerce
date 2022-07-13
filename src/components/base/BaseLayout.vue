<template>
	<ion-page>
		<base-main-menu content-id="main"></base-main-menu>
		<base-header id="main"></base-header>
		<ion-content>
			<slot></slot>
			<base-footer></base-footer>
		</ion-content>
	</ion-page>
</template>

<script setup>
import {IonPage, IonContent} from '@ionic/vue'
import BaseHeader from "./BaseHeader"
import BaseFooter from "./BaseFooter"
import BaseMainMenu from "./BaseMainMenu.vue";
</script>