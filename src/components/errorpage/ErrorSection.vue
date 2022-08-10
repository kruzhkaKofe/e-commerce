<template>
  <section class="error ion-padding">
    <base-section-heading :stick="false" class="error__heading">Page not found</base-section-heading>
    <error-item class="error__item"></error-item>
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import ErrorItem from './ErrorItem'
</script>

<style lang="sass" scoped>
.error
  &__heading
    margin-bottom: 60px
</style>
