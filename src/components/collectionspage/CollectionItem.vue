<template>
  <ion-item
    class="collection"
    :router-link="`/october-collection/${collection.id}`"
  >
    <ion-img
      class="collection__cover"
      :src="collection.cover"
      :alt="collection.title"
    />
    <div class="collection__footer">
      <span class="collection__number">{{ numOfCollection }}</span>
      <div class="collection__line"></div>
      <h3 class="collection__title">{{ collection.title }}</h3>
    </div>
  </ion-item>
</template>

<script setup>
import { IonImg, IonItem } from "@ionic/vue";
import { computed } from "@vue/runtime-core";

const props = defineProps({
  collection: Object,
});

const numOfCollection = computed(() => {
  if (props.collection.id < 10) {
    return `0${props.collection.id}`;
  } else {
    return `${props.collection.id}`;
  }
});
</script>

<style lang="sass" scoped>
.collection
	--background: #000000
	--inner-padding-end: 0
	--inner-border-width: 0
	--highlight-height: 0
	&::part(native)
		display: flex
		flex-direction: column
		padding: 0
	&__cover
		width: 361px
		height: 480px
	&__footer
		width: 100%
		display: flex
		align-items: center
		justify-content: space-between
		color: #FCFCFC
		line-height: 29px
		letter-spacing: 2px
		text-transform: uppercase
		mix-blend-mode: normal
		font-size: 14px
		padding: 10px 0
	&__number
		font-family: 'Bodoni Moda', serif
		font-weight: 900
	&__title
		font-size: 14px
		white-space: nowrap
	&__line
		border: 1px solid #FFFFFF
		opacity: 0.2
		width: 100%
		margin: 0 10px
</style>
