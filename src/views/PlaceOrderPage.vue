<template>
  <base-layout page-default-back-link="/checkout" :footer="false">
    <base-checkout-section>
      <template #content>
        <div class="container">
 <div class="row ">
 <div class="col-md-4 col-md-offset-4">

 <div class="credit-card-div">
<div class="panel panel-default" >
 <div class="panel-heading">
 
 <div class="row ">
 <div class="col-md-12">
 <input type="text" class="form-control" placeholder="Enter Card Number" />
 </div>
 </div>

 <div class="row ">
 <div class="col-md-3 col-sm-3 col-xs-3">
 <span class="help-block text-muted small-font" > Expiry Month</span>
 <input type="text" class="form-control" placeholder="MM" />
 </div>
 <div class="col-md-3 col-sm-3 col-xs-3">
 <span class="help-block text-muted small-font" > Expiry Year</span>
 <input type="text" class="form-control" placeholder="YY" />
 </div>
 <div class="col-md-3 col-sm-3 col-xs-3">
 <span class="help-block text-muted small-font" > CCV</span>
 <input type="text" class="form-control" placeholder="CCV" />
 </div>
 <div class="col-md-3 col-sm-3 col-xs-3">
<img src="https://bootstraptema.ru/snippets/form/2016/form-card/card.png" class="img-rounded" />
 </div>
 </div>

 <div class="row ">
 <div class="col-md-12 pad-adjust">

 <input type="text" class="form-control" placeholder="Name On The Card" />
 </div>
 </div>

 <div class="row">
<div class="col-md-12 pad-adjust">
 <div class="checkbox">
 <label>
 <input type="checkbox" checked class="text-muted"> Save details for fast payments <a href="#"> learn how ?</a>
 </label>
 </div>
</div>
</div>

 <div class="row ">
 <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
 <input type="submit" class="btn btn-danger" value="CANCEL" />
 </div>
 <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
 <input type="submit" class="btn btn-warning btn-block" value="PAY NOW" />
 </div>
 </div>
 
 </div>
 </div>
 </div><!-- ./credit-card-div -->

 </div> 
 </div>
</div><!-- /.container -->
      </template>
    </base-checkout-section>
    <template #custom-footer>
      <base-checkout-footer :fullAmount="fullAmount">
        <template #footer-button>
          <base-black-button class="button">
            <ion-label class="button__label">Заказать</ion-label>
          </base-black-button>
        </template>
      </base-checkout-footer>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/base/BaseLayout";
import BaseCheckoutSection from "@/components/base/BaseCheckoutSection";
import BaseCheckoutFooter from "@/components/base/BaseCheckoutFooter";
import BaseBlackButton from "@/components/base/BaseBlackButton";
import { IonLabel, IonInput } from "@ionic/vue";
import { IconShoppingBag } from "@/components/icons/index";

import { useCart } from "@/stores/cart.js";
import { storeToRefs } from "pinia";

const store = useCart();
const { allCart, fullAmount } = storeToRefs(store);
</script>

<style lang="sass" scoped></style>
<style>
.credit-card-div span {
 padding-top:10px;
 }
.credit-card-div img {
 padding-top:30px;
}
.credit-card-div .small-font {
 font-size:9px;
}
.credit-card-div .pad-adjust {
 padding-top:10px;
}
</style>