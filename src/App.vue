<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,900;1,6..96,700;1,6..96,800&family=Tenor+Sans&display=swap')

*
	margin: 0
	padding: 0
	box-sizing: border-box
	font-family: 'Tenor Sans', sans-serif
	font-weight: 400
</style>
