<template>
  <section class="trands">
    <h2 class="trands__heading">@Trandings</h2>
    <div class="trands__chips">
      <ion-chip class="trands__chip" v-for="(trand, i) in trands" :key="i">
        <ion-label class="trands__chip__label">{{ trand }}</ion-label>
      </ion-chip>
    </div>
  </section>
</template>

<script setup>
import { IonChip, IonLabel } from "@ionic/vue";

const props = defineProps({
  trands: Array,
});
</script>

<style lang="sass" scoped>
.trands
	padding: 30px 0
	display: flex
	flex-direction: column
	align-items: center
	&__heading
		font-size: 18px
		line-height: 40px
		letter-spacing: 4px
		text-transform: uppercase
		margin-bottom: 20px
	&__chips
		display: flex
		padding: 0 16px
		align-items: center
		flex-wrap: wrap
		justify-content: space-around
	&__chip
		display: flex
		justify-content: center
		align-items: center
		margin-bottom: 10px
		min-width: calc(100%/5)
		font-size: 14px
		line-height: 16px
		letter-spacing: 0.01em
		padding: 8px 10px
		--background: #F9F9F9
		--color: #333333
</style>
