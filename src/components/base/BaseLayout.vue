<template>
  <ion-page>
    <base-header id="menu"></base-header>
    <ion-content>
      <slot></slot>
      <base-footer v-if="footer === true"></base-footer>
    </ion-content>
    <base-footer v-if="footer === 'sticky'"></base-footer>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";
import BaseMenus from "./BaseMenus";

const props = defineProps({
  footer: {
    type: [Boolean, String],
    default: true,
  },
});
</script>
