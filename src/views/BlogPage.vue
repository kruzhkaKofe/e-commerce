<template>
  <base-layout>
    <blog-section
      :blogs="blogs"
      :tags="tags"
    ></blog-section>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BlogSection from "@/components/blogpage/BlogSection";

import { useBlogsStore } from "@/stores/blogs.js";;

const store = useBlogsStore()
const blogs = store.allBlogs

const tags = [
  "Fashion",
  "Promo",
  "Policy",
  "Lookbook",
  "Sale",
  "Tips",
  "Fashion",
  "Promo",
  "Policy",
  "Lookbook",
  "Sale",
  "Tips",
];


</script>

<style lang="sass" scoped></style>
