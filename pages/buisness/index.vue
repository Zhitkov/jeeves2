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
import TheFirst from '~/components/Buisness/TheFirst.vue'

export default {
  components: {
    TheFirst,
  }
}
</script>
