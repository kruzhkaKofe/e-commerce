<template>
  <section class="contacts">
    <base-section-heading class="contacts__heading"
      >Contact us</base-section-heading
    >
    <div class="contacts__list">
      <contacts-item
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />
    </div>
  </section>
</template>

<script setup>
import BaseSectionHeading from "@/components/base/BaseSectionHeading";
import ContactsItem from "./ContactsItem";

const props = defineProps({
  contacts: Array,
});
</script>

<style lang="sass" scoped>
.contacts
	padding: 30px 0
	&__list
		padding: 0 16px
</style>
