<template>
  <base-layout :footer="false">
    <about-section/>
    <about-form-section/>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import AboutSection from "@/components/aboutpage/AboutSection";
import AboutFormSection from "@/components/aboutpage/AboutFormSection";
</script>

<style lang="sass" scoped></style>
