<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <!-- <v-flex xs12> -->
        <TheFirst />
    <!-- </v-flex> -->
    <!-- <v-flex xs12> -->
        <TheSecond />
    <!-- </v-flex> -->
  </v-layout>
</template>

<script>
import TheFirst from '~/components/Assistent/TheFirst.vue'
import TheSecond from '~/components/Assistent/TheSecond.vue'

export default {
  components: {
    TheFirst,
    TheSecond,
  }
}
</script>
