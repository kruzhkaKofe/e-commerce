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
    <div class="footer__contacts">
      <router-link class="footer__contacts__item" to="/#"
        >support@openui.design</router-link
      >
      <router-link class="footer__contacts__item" to="/#"
        >+60 825 876</router-link
      >
      <span class="footer__contacts__item">08:00 - 22:00 - Everyday</span>
    </div>
    <icon-stick></icon-stick>
    <nav class="footer__nav">
      <router-link to="/#" class="footer__nav__link">About</router-link>
      <router-link to="/#" class="footer__nav__link">Contact</router-link>
      <router-link to="/#" class="footer__nav__link">Blog</router-link>
    </nav>
    <div class="footer__copyright">Copyright© OpenUI All Rights Reserved.</div>
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
	padding-top: 25px
	display: flex
	flex-direction: column
	align-items: center
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
		margin: 18px 0
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
