<template>
  <ion-page>
    <main-menu content-id="main"></main-menu>
		<base-header id="main"></base-header>
    <ion-content>
      <div class="cover">
        <div class="cover__title">
          <span class="cover__title__item">Luxury</span>
          <span class="cover__title__item">fashion</span>
          <span class="cover__title__item">accessories</span>
        </div>
        <button class="cover__button">Explore collection</button>
        <div class="cover__pagination">
          <div class="cover__pagination__item cover__pagination__item_active"></div>
          <div class="cover__pagination__item"></div>
          <div class="cover__pagination__item"></div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonIcon,
  IonImg,
  IonContent,
} from "@ionic/vue";
import MainMenu from "@/components/MainMenu.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";

</script>

<style lang="sass" scoped>
base-header > ion-toolbar
  --background: #E7EAEF

.cover
  display: flex
  justify-content: flex-end
  flex-direction: column
  padding: 18px 22px
  height: 600px
  background: url('@/assets/Main-background.jpg') no-repeat center
  &__title
    align-self: center
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
    &__item
      font-family: 'Bodoni Moda', serif
    &__item:first-child
      padding-left: 20px
    &__item:nth-child(2)
      padding-left: 38px
    &__item:last-child
      padding-left: 17px
      &::before
        content: "&"
        text-transform: lowercase
        font-size: 31px
        line-height: 34px
  &__button
    align-self: center
    margin-top: 167px
    font-weight: 400
    font-size: 16px
    line-height: 24px
    padding: 8px 30px
    text-transform: uppercase
    color: #FCFCFC
    background-color: rgba(0, 0, 0, 0.4)
    border-radius: 30px
    backdrop-filter: blur(4px)
    transition: .4s
    margin-bottom: 14px
    &:hover
      background-color: rgba(0, 0, 0, 0.8)
  &__pagination
    display: flex
    align-self: center
    &__item 
      width: 6px
      height: 6px
      border: 0.5px solid #FCFCFC
      transform: rotate(45deg)
      & + &
        margin-left: 10px
    
      &_active
        background: #FCFCFC
</style>
