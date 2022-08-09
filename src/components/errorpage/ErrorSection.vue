<template>
  <section class="error">
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
  padding: 30px 0
  &__heading
    margin-bottom: 60px
</style>
