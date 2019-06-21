<template>
 <v-layout
    column
    justify-center
    align-center
  >
    <!-- <v-flex xs12> -->
        <TheFirst />
    <!-- </v-flex> -->
  </v-layout>
</template>

<script>
import TheFirst from '~/components/SignIn/TheFirst.vue'

export default {
  components: {
    TheFirst,
  },
  data () {
    return {
      bg: require('../../static/Home/First.png'),
    }
  }
}
</script>
<style scoped>

  .parallax-screen{
  width: 100vw;
  height: 100vh !important;
}
@media screen and (max-width: 900px){
 .parallax-screen{
  width: 100vw;
  height: 120vh !important;
}
}
</style>