<template>
  <ion-footer class="footer">
    <div class="footer__socials">
      <router-link class="footer__socials__link" to="/#"
        ><icon-twitter-dark></icon-twitter-dark
      ></router-link>
      <router-link class="footer__socials__link" to="/#"
        ><icon-instagram-dark></icon-instagram-dark
      ></router-link>
      <router-link class="footer__socials__link" to="/#"
        ><icon-youtube-dark></icon-youtube-dark
      ></router-link>
    </div>
    <icon-stick></icon-stick>
    <address class="footer__contacts">
      <router-link class="footer__contacts__item" to="/#"
        >mail@example.com</router-link
      >
      <router-link class="footer__contacts__item" to="/#"
        >+7-(800)-555-35-35</router-link
      >
      <span class="footer__contacts__item">08:00 - 22:00 - Ежедневно</span>
    </address>
    <icon-stick></icon-stick>
    <nav class="footer__nav">
      <router-link to="/about" class="footer__nav__link">О нас</router-link>
      <router-link to="/contacts" class="footer__nav__link">Контакты</router-link>
      <router-link to="/blogs" class="footer__nav__link">Блоги</router-link>
    </nav>
    <div class="footer__copyright">Copyright© All Rights Reserved.</div>
  </ion-footer>
</template>

<script setup>
import {
  IconTwitterDark,
  IconInstagramDark,
  IconYoutubeDark,
  IconStick,
} from "@/components/icons/index";
import { IonFooter } from "@ionic/vue";
</script>

<style lang="sass" scoped>
a
	color: #333333
	text-decoration: none
	font-size: 16px

.footer
	background-color: #FFFFFF
	padding-top: 25px
	display: flex
	flex-direction: column
	align-items: center
	&::before
		height: 0
	&__socials
		width: 162px
		display: flex
		align-items: center
		justify-content: space-between
		margin-bottom: 25px
		&__link
			display: flex
			align-items: center
			justify-content: center
			width: 24px
			height: 24px
	&__contacts
		display: flex
		flex-direction: column
		align-items: center
		font-style: normal
		margin: 18px 0
		color: #333333
		&__item
			line-height: 184%
	&__nav
		margin: 25px 0px
		padding: 0px 70px
		width: 100%
		display: flex
		align-items: center
		justify-content: space-between
		&__link
			line-height: 24px
	&__copyright
		width: 100%
		text-align: center
		padding: 10px 70px
		font-size: 12px
		line-height: 160%
		color: #555555
		background-color: rgba(196, 196, 196, 0.1)
</style>
