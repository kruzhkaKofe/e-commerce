<template>
  <swiper 
    class="cover" 
    :modules="modules" 
    :pagination="{
      el: '.cover__pagination',
    }"
    >
    <swiper-slide v-for="n in 3" :key="n" class="cover__item">
      <div class="cover__title">
        <span class="cover__title__item">Luxury</span>
        <span class="cover__title__item">fashion</span>
        <span class="cover__title__item">accessories</span>
      </div>
    </swiper-slide>
    <div class="cover__activities">
      <ion-button class="cover__button">Explore collection</ion-button>
      <div class="cover__pagination"></div>
    </div>
  </swiper>
</template>

<script setup>
import { IonButton, IonButtons } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

</script>

<style lang="sass" scoped>
.cover
  height: 600px
  width: 100%
  position: relative
  &__item
    height: 100%
    width: 100%
    background: url('/public/assets/Main-background.jpg') no-repeat center
    display: flex
    align-items: center
    justify-content: center
  &__title
    display: flex
    flex-direction: column
    font-family: 'Bodoni Moda', serif
    font-weight: 700
    font-style: italic
    font-size: 39px
    line-height: 43px
    letter-spacing: 1.21px
    text-transform: uppercase
    color: #333333
    opacity: 0.7
    mix-blend-mode: multiply
    &__item
      font-family: 'Bodoni Moda', serif
    &__item:first-child
      padding-left: 25px
    &__item:nth-child(2)
      padding-left: 40px
    &__item:last-child
      padding-left: 20px
      &::before
        content: "&"
        text-transform: lowercase
        font-size: 31px
        line-height: 34px
  &__activities
    position: absolute
    bottom: 18px
    left: 50%
    transform: translate(-50%, 0)
    z-index: 15
  &__button
    font-weight: 400
    font-size: 16px
    line-height: 24px
    text-transform: uppercase
    --padding: 8px 30px
    --color: #FCFCFC
    --background: rgba(0, 0, 0, 0.4)
    --background-hover: rgba(0, 0, 0, 0.8)
    --border-radius: 30px
    --transition: .4s
    margin-bottom: 14px
    --background-activated: #DD8560
    &::part(native)
      backdrop-filter: blur(4px)
  &__pagination
    display: flex
    justify-content: center

:deep(.swiper-pagination-bullet)
  width: 6px
  height: 6px
  border: 0.5px solid #FCFCFC
  background-color: transparent
  border-radius: 0
  transform: rotate(45deg)
  
:deep(.swiper-pagination-bullet-active)
  background-color: #FCFCFC
</style>
