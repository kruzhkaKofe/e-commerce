<template>
	<ion-tab-button selected class="tab-button">
		<ion-label>
			{{ tab }}
		</ion-label>
	</ion-tab-button>
</template>

<script setup>
import { IonTabButton, IonLabel} from "@ionic/vue";

const props = defineProps({
	tab: String
})
</script>

<style lang="sass" scoped>
.tab-button
	font-size: 14px
	line-height: 106%
	letter-spacing: 1px
	--color-selected: #212806
	--ripple-color: #DD8560
</style>