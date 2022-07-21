<template>
  <div class="menues">
    <base-main-menu />
    <base-cart />
  </div>
</template>

<script setup>
import BaseCart from "./BaseCart.vue";
import BaseMainMenu from "./BaseMainMenu.vue";
</script>

<style lang="sass" scoped>
ion-header::after
	height: 0

ion-tab-bar
	--background: #FFFFFF

ion-menu
	--width: 100%

:deep(.toolbar)
	--background: #FFFFFF

:deep(.close-button)
	width: 48px
	height: 48px
	--background: transparent
	--border-radius: 50%
	--padding-start: 0px
	--padding-end: 0px

:deep(.menu__toolbar)
	--background: #FFFFFF
</style>
