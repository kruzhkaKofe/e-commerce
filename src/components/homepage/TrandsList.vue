<template>
  <section class="trands ion-padding">
    <base-section-heading :stick="false">@Trandings</base-section-heading>
    <div class="trands__chips">
      <ion-chip class="trands__chip" v-for="(trand, i) in trands" :key="i">
        <ion-label class="trands__chip__label">{{ trand }}</ion-label>
      </ion-chip>
    </div>
  </section>
</template>

<script setup>
import { IonChip, IonLabel } from "@ionic/vue";
import BaseSectionHeading from "@/components/base/BaseSectionHeading";

const props = defineProps({
  trands: Array,
});
</script>

<style lang="sass" scoped>
.trands
	display: flex
	flex-direction: column
	align-items: center
	&__chips
		display: flex
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
