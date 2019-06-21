<template>
  <v-layout class="full-screen" row wrap>
    <v-flex xs12>
      <v-img class="parallax-screen change" style="align-items: flex-end !important; height: 87.11px;"  dark :lazy-src="driver" cover :src="driver">
        <div style="justify-content: flex-start;" class="static">
          <v-flex ml-3 md3>
            <v-img style="padding-bottom: 42px;" :src="logo" contain></v-img>
          </v-flex>
        </div>
      </v-img>
    </v-flex>
      <div style="flex-direction: column;" class="static">
    <v-flex ml-4 md8 xs10>
      <p  class="neue driver-title"> Зарабатывайте с JEEVES </p>
    </v-flex>
    <v-flex ml-4 style="margin-top: 0px !important;" class="thin"  md7 xs10>
      <b class="neue" style="color: #136CE2; font-size: 25px;
line-height: 25px;">JEEVES</b> — компания с высокими стандартами качества и обслуживания.</v-flex>
    <v-flex ml-4 class="thin" md9 xs10>
      Водитель - это  лицо компании, наша  главная гордость и ценность, по  качеству работы которого  формируется мнение о компании в целом. Мы сотрудничаем с профессионалами, с большой ответственностью подходящим   к своему делу, соблюдающими этикет и корпоративные стандарты в выполнении своих обязанностей, в поведении и внешнем виде.
    </v-flex>
   <!--  <v-flex class="thin" offset-md2 md5 offset-xs1 xs10>
      Основным принципом работы компании, является высочайший уровень предоставляемых услуг. С нашей помощью пассажиры получают высококлассный сервис, а водители — достойно зарабатывают.
      Наша главная ценность и гордость  — это наши сотрудники.
    </v-flex> -->
    <v-flex ml-4 class="thin" md9 xs10>
       Приглашаем к сотрудничеству, водителей для работы на автомобилях нашего парка, водителей со своим авто бизнес - класса, автопарки.  
    </v-flex>
    <v-flex ml-4 class="thin" md9 xs10>Cтаньте частью команды и зарабатывайте вместе с JEEVES!</v-flex>
    <v-flex ml-4 md8  xs10>
      <p class="neue driver-title"> Преимущества работы с JEEVES </p>
    </v-flex>
    <v-flex ml-4 xs12>
      <AboutVector style="max-width: 1500px;" :aboutBuisness="false"/>
    </v-flex>
    <v-flex ml-4 offset-md2 md8 offset-xs1 xs10>
      <p class="neue driver-title"> Станьте партнёром JEEVES прямо сейчас </p>
    </v-flex>
      </div>
    <DriverForm/>
  </v-layout>
</template>

<script>
import AboutVector from '~/components/layouts/AboutVector.vue'
import DriverForm from '~/components/Drivers/DriverForm.vue'

  export default {
    components: {
      AboutVector,
      DriverForm

    },
    data () {
      return {
        logo: require('../../static/logos/logo2.svg'),
        driver: require('../../static/Drivers/bg.png')
      }
    },
    methods: {
    //   completeNext﻿: function () {
    //   var tl = new TimelineMax;
    //   tl.add(
    //         TweenLite.to('.opa', 1, {opacity: 1}),
    //       );

    // },
  }
}
</script>

<style lang="stylus" scoped>
.full-screen
  width 100vw
  display flex 
  justify-content center
div[data-v-00bd8e1c].container
  align-items: flex-end !important
.parallax-screen
  width 100vw
  height 65vh !important
  // .container
  //   align-content: center;
  //   align-items: center;
  //   align-self: center;
  //   display: flex;
.First-text
  text-align center 
.downloads
  margin-bottom 10vw 
li
  list-style-type circle
  padding-left 10px
</style>
<style scoped>
.driver-title {
font-size: 38px;
line-height: 38px;

color: #1D1919;
  margin-bottom: 75px;
  margin-top: 55px;
}
.driver-title:last-child {
  margin-bottom: 20px;
  margin-top: 90px;
}
.thin {
font-size: 18px;
line-height: 21px;
  font-weight: 100;
  margin: 5px;
  line-height: 25px;
}
@media screen and (max-width: 900px){
  .driver-title {
  font-weight: 500;
  font-size: 23px;
  margin-bottom: 75px;
  margin-top: 55px;
}
  .First-text{
    font-size: 20px; 
    margin: 5% 10% 1%;
  }
  .parallax-screen{
    height: 100vh !important;
  }
}
</style>

