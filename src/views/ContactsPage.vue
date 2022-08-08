<template>
  <base-layout>
    <contacts-section :contacts="contacts" />
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import ContactsSection from "@/components/contactspage/ContactsSection";

const contacts = [
  {
    id: "chat",
    icon: "assets/contactspage/message.svg",
    text: "Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.",
    button_text: "Chat with us",
  },
  {
    id: "sms",
    icon: "assets/contactspage/letter.svg",
    text: "You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.",
    button_text: "Text us",
  },
  {
    id: "socials",
    icon: "assets/contactspage/twitter.svg",
    text: "To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!",
  },
];
</script>

<style lang="sass" scoped></style>
