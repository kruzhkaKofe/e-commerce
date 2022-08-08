<template>
  <ion-page>
    <base-menus />
    <base-header id="menu"></base-header>
    <ion-content>
      <slot></slot>
      <base-footer v-if="footer"></base-footer>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";
import BaseMenus from "./BaseMenus.vue";

const props = defineProps({
  footer: {
    type: Boolean,
    default: true,
  },
});
</script>
