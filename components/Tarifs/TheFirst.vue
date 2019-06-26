<template>
  <v-layout class="full-screen" row wrap>
    <v-flex xs12>
      
      <v-img class="parallax-screen change" style="align-self: flex-end;" dark :lazy-src="bg" cover :src="bg">
        <div style="display: flex; justify-content: flex-start;" class="static">
        <v-flex md3 xs2>
          <v-img style="padding-bottom: 69px;" :src="logo" contain></v-img>
        </v-flex>
        </div>
    </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        logo: require('../../static/logos/logo2.svg'),
        bg: require('../../static/tarifs/preview.png')
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
div[data-v-00bd8e1c].container
  align-items: flex-end !important
.parallax-screen
  width 100vw
  height 65vh !important
  .container
    align-content: center;
    align-items: center;
    align-self: center;
    display: flex;
.First-text
  text-align center 
.downloads
  margin-bottom 10vw 
</style>
<style scoped>
@media screen and (max-width: 900px){
  .First-text{
    font-size: 20px; 
    margin: 5% 10% 1%;
  }
  .parallax-screen{
    height: 100vh !important;
  }
}
</style>
<style type="text/css">
.layout.full-screen.row.wrap .flex.xs12 .v-responsive__content{
  display: flex;
  justify-content: center;
  align-self: flex-end;
}
</style>