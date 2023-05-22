<template>
  <section class="sing-up">
    <base-section-heading class="sing-up__heading">Зарегистрироваться</base-section-heading>
    <p class="sing-up__description">
      Получите ранний доступ к новым поступлениям, распродажам, эксклюзивному контенту, событиям и многому другому!
    </p>
    <form @submit.prevent method="post" class="sing-up__form">
      <div class="ion-padding">
        <ion-input
          class="sing-up__input"
          placeholder="Email address"
          type="email"
          pattern="email"
          required="true"
          inputmode="email"
          id="email"
        />
      </div>
      <base-black-button class="sing-up__button" type="submit">
        Подтвердить
        <icon-forward-arrow class="sing-up__button__icon" slot="end" />
      </base-black-button>
    </form>
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import BaseBlackButton from "@/components/base/BaseBlackButton";
import { IonInput, IonButton, IonLabel } from "@ionic/vue";
import { IconForwardArrow } from "@/components/icons/index";
</script>

<style lang="sass" scoped>
.sing-up
  padding-bottom: 0 !important
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
  &__button__icon
    margin-left: 24px

:deep(.submit__button__icon) path,
:deep(.submit__button__icon) line
  stroke: #FCFCFC
</style>
