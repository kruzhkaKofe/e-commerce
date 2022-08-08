<template>
  <section class="about">
    <base-section-heading class="about__heading">About us</base-section-heading>
    <div class="about__text ion-padding">
      <p class="about__paragraph">
        Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can
        open Open Fashion - Free Ecommerce UI Kit file by Figma.
      </p>
      <br />
      <p class="about__paragraph">
        Create stunning shop with bulletproof guidelines and thoughtful
        components. Its library contains more than 50+ components supporting
        Light &amp; Dark Mode and 60+ ready to use mobile screens.
      </p>
    </div>
    <ion-img class="about__image" src="assets/aboutpage/about-image.jpg" alt="about-image" />
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import { IonImg } from "@ionic/vue";
</script>

<style lang="sass" scoped>
.about
	padding: 30px 0
	&__text
		text-align: justify
		font-size: 16px
		line-height: 20px
		color: #333333
</style>
