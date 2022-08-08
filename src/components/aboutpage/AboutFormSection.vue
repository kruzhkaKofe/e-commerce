<template>
  <section class="submit">
    <base-section-heading class="submit__heading">Sign up</base-section-heading>
    <p class="submit__description">
      Receive early access to new arrivals, sales, exclusive content, events and
      much more!
    </p>
    <form @submit.prevent method="post" class="submit__form">
      <div class="ion-padding">
        <ion-input
          class="submit__input"
          placeholder="Email address"
          type="email"
          pattern="email"
          required="true"
					inputmode="email"
					id="email"
        />
      </div>
      <ion-button class="submit__button" type="submit">
        <ion-label class="submit__button__label">Submit</ion-label>
        <icon-forward-arrow class="submit__button__icon" />
      </ion-button>
    </form>
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import { IonInput, IonButton, IonLabel } from "@ionic/vue";
import { IconForwardArrow } from "@/components/icons/index";
</script>

<style lang="sass" scoped>
.submit
	&__description
		text-align: center
		font-size: 14px
		line-height: 22px
		color: #888888
	&__input
		font-size: 15px
		line-height: 18px
		margin-bottom: 15px
		border-bottom: 2px solid #D4D4D4
		--padding-top: 16px
		--padding-bottom: 16px
		--color: #979797
	&__button
		height: 56px
		width: 100%
		--border-radius: 0
		--background: #000000
		&__label
			margin-right: 24px
			font-size: 14px
			line-height: 24px
			letter-spacing: 0.01em
			text-transform: uppercase
			color: #FCFCFC


:deep(.submit__button__icon) path,
:deep(.submit__button__icon) line
	stroke: #FCFCFC
</style>
