<template>
  <base-layout page-default-back-link="/home">
    <blog-section :blogs="blogs" :tags="tags"></blog-section>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BlogSection from "@/components/blogpage/BlogSection";

import { useBlogsStore } from "@/stores/blogs.js";
import { storeToRefs } from "pinia";

const store = useBlogsStore();
const { blogs, tags } = storeToRefs(store);
</script>

<style lang="sass" scoped></style>
