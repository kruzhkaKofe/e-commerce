<template>
	<base-layout>
		<blog-overview :blog="loadedBlog"></blog-overview>
	</base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BlogOverview from "@/components/blogpage/BlogOverview";
import { useBlogsStore } from "@/stores/blogs.js";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";

const store = useBlogsStore();
const route = useRoute()
const blogId = ref(route.params.id)

const loadedBlog = store.getBlogById(blogId.value)
 

</script>

<style lang="sass" scoped>

</style>