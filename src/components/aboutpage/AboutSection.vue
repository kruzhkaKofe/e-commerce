<template>
  <section class="about">
    <base-section-heading class="about__heading">О нас</base-section-heading>
    <div class="about__text ion-padding">
      <p class="about__paragraph">
        Это интернет-магазин, разработанный как дипломный проект, использован vue.js в купе с ionic framework
      </p>
      <br />
      <p class="about__paragraph">
        Этот интернет-магазин просто потрясающий, так что я считаю, что он достоин не то, что 5+, но даже 999+. Ну или 255 (шкала от 0 до 255)
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
	&__text
		text-align: justify
		font-size: 16px
		line-height: 20px
		color: #333333
</style>
