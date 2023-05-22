<template>
  <base-layout page-default-back-link="/home">
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
    text: "Нужен СРОЧНЫЙ ответ? Свяжитесь с нами через чат, 24/7! Для существующих заказов мебели, пожалуйста, позвоните нам.",
    button_text: "Chat with us",
  },
  {
    id: "sms",
    icon: "assets/contactspage/letter.svg",
    text: "Вы можете отправить нам сообщение по номеру 8 800 555 35 35 или нажать на ссылку «Отправить нам сообщение» ниже на своем мобильном устройстве. Пожалуйста, позвольте системе подтвердить простое приветствие (подойдет даже «Привет!»), прежде чем предоставлять информацию о вашем вопросе/заказе. Согласие не требуется для любой покупки. Могут применяться тарифы на передачу сообщений и данных. Текстовые сообщения могут быть доступны не у всех операторов связи.",
    button_text: "Text us",
  },
  {
    id: "socials",
    icon: "assets/contactspage/twitter.svg",
    text: "Чтобы отправить нам личное или прямое сообщение, например, @Virdess в Telegram или подпишитесь на нас в Twitter. Мы свяжемся с вами как можно скорее. Пожалуйста, укажите свое имя, номер заказа и адрес электронной почты для более быстрого ответа!",
  },
];
</script>

<style lang="sass" scoped></style>
