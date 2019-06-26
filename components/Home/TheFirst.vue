<template>
  <v-layout class="full-screen" row wrap>
    <v-spacer></v-spacer>
    <v-flex xs12  style="display: flex; flex-direction: column; justify-content: center;">
    <v-parallax class="parallax-screen" dark :lazy-src="bg" :src="bg">
            <div class="static" style="width: 100%; ">
                <img class="hidden-sm-and-down" :src="logo" style="margin-left:25px;  width: 226px; height: 412px;"/>
                <img class="hidden-md-and-up" :src="logo" style="  width: 100%;"/>
            </div>
    </v-parallax>
    <div style="width: 988px !important;" class="static">
    <v-flex justify-center px-4 offset-md1 md10 offset-xs2 xs8>
      <h1 class="First-text">Комфорт поездок бизнес-классом и личный ассистент в одном мобильном приложении </h1>
      <Border style="margin-left: 0;width: 100%"/>
      <h1 class=" neue First-text">Установить</h1>
      <appInstallButtons :isBlack="true"/>
    </v-flex>
  </div>
  </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>

<script>
import Border from '~/components/layouts/Border.vue'
import appInstallButtons from '~/components/layouts/appInstallButtons.vue'
  export default {
    components: {
      Border,
      appInstallButtons
    },
    data () {
      return {
        bg: require('../../static/Home/First.png'),
        logo: require('../../static/logos/logo.svg')
      
    }
  }
    // methods: {
    //   completeNext﻿: function () {
    //   var tl = new TimelineMax;
    //   tl.add(
    //         TweenLite.to('.opa', 1, {opacity: 1}),
    //       );
    // },
  // }
}
</script>

<style lang="stylus" scoped>

.neue
  font-size: 36px;
  line-height: 36px; 
.full-screen
  width 100vw
.parallax-screen
  width 100vw
  min-height 751px !important
  height 80vh !important
  .v-parallax__content > .container
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center
    display: flex;
    .opa 
      opacity 1
.First-text
  text-align center 
  font-size 28px
  margin 50px 32px 10px
  font-weight 300
  &:nth-child(3)
    margin-top 48px
    margin-bottom  17px
    font-size 21px !important
.downloads
  margin-bottom 103px 

</style>
<style scoped>
@media screen and (max-width: 900px) {
  .First-text{
    font-size: 20px; 
    /*margin: 5% 10% 1%;*/
  }
  .parallax-screen{
    height: 100vh !important;
  }
}
</style>
<style type="text/css">
.v-parallax.parallax-screen.change .v-parallax__image-container img.v-parallax__image {
  transform: translate(-50%, 101px) !important;
}
</style>

