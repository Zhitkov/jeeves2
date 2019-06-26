<template>
	<v-container fluid style="background-size: 100% 80vh; background-position: center -25vh; padding: auto 0; min-width: 100vw; margin-bottom: 100px; height: 60vh; min-height: 750px;" >
	  <v-layout column wrap >
	    <v-flex xs12>
	    <v-flex offset-md3 md6 xs12 class="text-c third-container hidden-sm-and-down">
	      <h1 class="third-title">к Вшим услугам наш парк новых авто,</h1>
	      <h3 class="third-subtitle">которые мы содержим в безупречной чистоте
и таком же техническом состоянии, никакого брендирования</h3>
	    </v-flex>
	    <v-flex offset-md3 md6 xs12 class="text-c third-container hidden-md-and-up">
	      <h1 class="third-title">K Вашим услугам наш парк новых авто,</h1>
	      <h3 class="third-subtitle-min">которые мы содержим в безупречной чистоте
и таком же техническом состоянии, никакого брендирования</h3>
	    </v-flex>
	    </v-flex>
	    <TheCarsCarousel s style="margin-bottom: 9vh; width: 100%"/>
	    <div class="static">
	    <v-flex xs12 style="display:flex; margin-top: 20%; justify-content: center;">
			<!-- <v-btn to="/tarifs" style="width: 200px; height: 38px; " outline color="black"><b style="color: #136CE2 !important;">Тарифы</b></v-btn> -->
		</v-flex>
	    </div>
	  </v-layout>
	</v-container>
</template>

<script>
import TheCarsCarousel from '~/components/Home/TheCarsCarousel.vue'
import { TweenMax, TweenLite, Power2 } from 'gsap';
export default {
	data() {
		// return {
		// }
	},
  components: {
    TheCarsCarousel,
  }
}
</script>

<style lang="stylus" scoped>
.container
	height 100vh
	width  100vw
	background-image url('../../static/Home/road.png') 
	.third-container
		height 55%
		margin-top: 2%
		.third-title
			font-family: Roboto;
			font-style: normal;
			font-weight: 300;
			font-size: 25px;
			line-height: 29px;
			text-align: center;
			color: #1D1919;
		.third-subtitle
			font-family: Roboto;
			font-style: normal;
			font-weight: 300;
			font-size: 21px;
			line-height: 25px;
			text-align: center;
			color: #1D1919;
			display: inline-block;
			width: 580px
		.third-subtitle-min
			font-family: Roboto;
			font-style: normal;
			font-weight: 300;
			font-size: 21px;
			line-height: 25px;
			text-align: center;
			color: #1D1919;
			display: inline-block;
		.third-text
			font-weight: 500
			font-size 21px
			font-weight 100 
		    margin-bottom: -20px;
</style>

<style scoped>
@media screen and (max-width: 900px){
	.third-title {
		font-size: 21px !important;
	}
	.container {
		background-position: 1px -30vh !important;
	    height: 110vh;
	}
}
</style>
