<template>
    <v-layout
    column
    justify-center
    align-center
    >
    <TheFirst />
    <TheSecond />
    <TheThird />
    <TheFourth />
  </v-layout>
</template>

<script>
import Waves from '~/components/layouts/Waves.vue'
import TheFirst from '~/components/Home/TheFirst.vue'
import TheSecond from '~/components/Home/TheSecond.vue'
import TheThird from '~/components/Home/TheThird.vue'
import TheFourth from '~/components/Home/TheFourth.vue'
import appInstallButtons from '~/components/layouts/appInstallButtons.vue'

export default {
  components: {
    Waves,
    TheFirst,
    TheSecond,
    TheThird,
    TheFourth,
    appInstallButtons
  },
  data () {
    return {
      bg1: require('../static/Home/First.png'),
    }
  }

}
</script>

<style scoped>
  .v-image{
    width: 100%;
  }
  .parallax-screen{
    width: 100vw;
    height: 80vh !important;
  }
  .First-text{
    text-align: center;
    font-size: 32px;
    margin: 70px 0 30px;
  }
  .First-text:nth-child(3){
    /*margin: 2% 25% 1%;*/
  }
.downloads {
  margin-bottom: 10vw; 
}
</style>

