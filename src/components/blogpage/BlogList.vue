<template>
  <ion-list class="list ion-padding">
    <blog-item v-for="blog in blogs" :key="blog.id" :blog="blog"></blog-item>
  </ion-list>
</template>

<script setup>
import { IonList } from "@ionic/vue";
import BlogItem from "./BlogItem";

const props = defineProps({
  blogs: Array,
});
</script>

<style lang="sass" scoped>
.list
	background-color: #fff
	display: flex
	flex-direction: column
	align-items: center
</style>
