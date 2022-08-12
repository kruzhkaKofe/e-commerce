<template>
  <section class="checkout ion-padding">
    <base-section-heading class="checkout__heading"
      >Checkout</base-section-heading
    >
    <slot name="content"></slot>
  </section>
</template>

<script setup>
import BaseSectionHeading from "./BaseSectionHeading";
</script>

<style lang="sass" scoped>
.checkout
	position: relative
	padding-bottom: 130px
	height: calc( 100% - 130px )
</style>
