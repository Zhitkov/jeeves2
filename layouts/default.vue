<template>
    <div >
      <Waves style="z-index: 9999" v-if="loading" />
  <v-app light v-else>
      <TheNavbar class="nav-fix"/>
        <nuxt />
      <TheFooter/>
  </v-app>
    </div>
</template>

<script>
import Waves from '~/components/layouts/Waves.vue'
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components:{
    Waves,
    TheNavbar,
    TheFooter,
  },
  data: () => ({
    loading: true,
    img: require('../static/Home/First.png')
  }),
  mounted() {
    var img = new Image();
    img.onload = () => { 
      setTimeout(() => {
        this.loading = false;
      }, 3500);
    }
    img.src = this.img;
  },
  methods: {

  }
}
</script>

<style lang="stylus">
.v-btn__content
    text-transform: initial !important;
    font-size: 16px;
    font-weight: 400;
.static 
  justify-self: center;
  display: flex;
  align-self: center;
  max-width: 1200px !important;
  // width: 1200px !important;
@font-face {
    font-family: Neue;
    font-style: normal;
    src: url("../assets/fonts/9116.otf");
  }
.theme--light.application
  background: #fff !important
body
  overflow: hidden
  background: #fff
  .v-parallax__image
    min-height: 110vh;
  .loading-container
    background: #000000;
  .nav-fix
    position: fixed;
    z-index: 999;
  .text-c
    text-align: center;
  .linkText
    text-decoration underline
    color #136CE2
    cursor pointer
  .neue
    font-family 'Neue' !important
@media screen and (max-width: 2000px) {
  .v-parallax__image{
    min-height: 110vh !important;
  }
}
@media screen and (max-width: 1700px) {
  .v-parallax__image{
    min-height: 135vh !important;
  }
}
@media screen and (max-width: 1300px) {
  .v-parallax__image{
    min-height: 165vh !important;
  }
}
</style>
<style type="text/css">
.appear {
  -webkit-animation: .5s ease-out appear;
  -o-animation: .5s ease-out appear;
  animation: .5s ease-out appear;
}

@keyframes appear {
      0% {
        opacity: 0;
        top: -40px;
      }

      30% {
        opacity: 0;
      }

      80% {
        opacity: .5;
        top: -20px;
      }
      100% {
        opacity: 1;
        top: 0px;
      }
    }
 .theme--light.v-text-field--outline > .v-input__control > .v-input__slot { 
    padding: 0px 16px !important;
    border: 0.6px solid #1D1919 !important;
    border-radius: 3px;
 }
  .v-input__slot {
    background: transparent!important;
    background: white !important;
    border-radius: 4px;
}
</style>