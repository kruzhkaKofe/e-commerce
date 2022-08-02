<template>
  <ion-page>
    <base-menues></base-menues>
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
import BaseMenues from "./BaseMenues.vue";

const props = defineProps({
  footer: {
    type: Boolean,
    default: true,
  },
});
</script>
