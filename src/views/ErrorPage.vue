<template>
  <base-layout :footer="'sticky'">
    <error-section />
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BaseFooter from "@/components/base/BaseFooter";
import ErrorSection from "@/components/errorpage/ErrorSection";
</script>

<style lang="sass" scoped></style>
