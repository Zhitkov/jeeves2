<template>
	<v-layout row wrap>
      <v-flex class="hidden-sm-and-down" v-for="(car,i) in cars"
	      	 :key="i" xs12>
		<div :class="car.pos+' coolCar'">
		    <b>{{ car.text }}</b>
	    	<img :class="car.pos" :src="car.src"></img>
		</div>
		<div v-if="i===0" style="position: absolute; margin-top: 53vh; width: 100vw;" >
			<v-flex offset-xs3 xs1>
			<p style="font-weight: 300; font-size: 21px; position: absolute;     width: 209px; height: 47px;">{{ marks[current] }}</p>
			</v-flex>
			<v-flex pr-5 style="display: flex; justify-content: center;" offset-xs5 xs2>
				<v-btn to="/tarifs" style="width: 226px; height: 48px; " outline color="black"><b style="color: #136CE2 !important;">Тарифы</b></v-btn>
			</v-flex>
		</div>
      </v-flex>
      <v-flex class="carousel-elements hidden-sm-and-down" xs12>
      	<v-flex offset-xs5 xs2 style="display: flex; justify-content: center;">
			<div @click="completePrev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.6731 1.25L1.25 14.6729L14.6731 28.0959" stroke="#707070" stroke-linecap="round" stroke-linejoin="round"/>
			</svg></div>
			<div @click="completeNext"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.25 1.25L14.6731 14.6729L1.25 28.0959" stroke="#707070" stroke-linecap="round" stroke-linejoin="round"/>
			</svg></div>
		</v-flex>
	</v-flex>
		<v-carousel light :active-class="'carousel-car'" :cycle="0" style="width: 100vh; margin-top: 30px" :hide-delimiters="true" class="hidden-md-and-up car-carousel">
			<v-carousel-item
			  v-for="(car,i) in cars"
			  :key="i"
			  :src="car.src"
			>
			<p>{{ car.text }}</p>
			<p>{{ marks[i] }}</p>
		</v-carousel-item>
		</v-carousel>
	</v-layout>
</template>

<script>
import Vuetify, {
  VBtn,
} from 'vuetify/lib'
  export default {
    data () {
      return {
        cars: [
          {
            src: require('../../static/cars/vip1.png'),
            pos: 'four',
            text: 'VIP',
          },
          {
            src: require('../../static/cars/plus1.png'),
            pos: 'third',
            text: 'Минивен',
          },
          {
            src: require('../../static/cars/premium1.png'),
            pos: 'first',
            text: 'Премиум',
          },
          {
            src: require('../../static/cars/business1.png'),
            pos: 'second',
            text: 'Бизнес',
          },
        ],
        marks: [
        		'Mercedes-Benz V-class',
		        'Mercedes-Benz E-class, BMW 5', 
        		'Mercedes-Benz S-class, BMW 7', 
        		'Mercedes-Maybach S-class', 
        		],
        current: 1,
      }
    },
    props: ['currentCar'],
    mounted() {
    },
    methods: {
    	completeNext﻿: function () {
			var tl = new TimelineMax;
			tl.add(
		    		TweenLite.to('.first.coolCar', 1, {className: "four coolCar"}),
		    		TweenLite.to('.second.coolCar', 1, {className: "third coolCar"}),
		    		TweenLite.to('.third.coolCar', 1, {className: "first coolCar"}),
		    		TweenLite.to('.four.coolCar', 1, {className: "second coolCar", onComplete: this.current===3?this.current=0:this.current++})
    			);

		},
		completePrev: function () {
			var tl = new TimelineMax;
			tl.add(
		    		TweenLite.to('.first.coolCar', 1, {className: "third coolCar"}),
		    		TweenLite.to('.second.coolCar', 1, {className: "four coolCar"}),
		    		TweenLite.to('.third.coolCar', 1, {className: "second coolCar", onComplete: this.current===0?this.current=3:this.current--}),
		    		TweenLite.to('.four.coolCar', 1, {className: "first coolCar"})
    			);
		},
	}
}
</script>

<style lang="stylus" scoped>
.layout
	-webkit-justify-content center
	justify-content center

.coolCar
	position absolute
	background-size: auto !important;
.coolCar > b
	bottom 0vw
	left 0%
	position absolute
	background-size: auto !important;
	font-weight 500
	z-index: 10
.coolCar > img
	height auto

.coolCar.first
	width: 15%
	margin-top 5vh
	right: -5vw 
	b
		left 20%
		font-size 18px
.coolCar.second
	width 35%
	margin-top 23vh
	right 43vw
	b
		left 20%
		font-size 32px
.coolCar.third
	width 23%
	margin-top 22vh
	right 5vw 
	b
		left 10%
		font-size 18px
.coolCar.four
	width 20%
	margin-top 5vh
	right 88vw 
	b
		left 71%
		font-size 18px


img
	width: 100%
	position absolute
	background-size: auto !important;
</style>

<style lang="stylus" scoped>
.carousel-elements
    margin-top: 18vh
    z-index: 99;
    svg
    	cursor: pointer;
    	&:first-child
		    margin-right: 20px
    	&:last-child
		    margin-left: 20px
</style>

<style lang="stylus" scoped>
.tarifs {
    display: flex;
    flex-direction: row-reverse;
	position: absolute;
    margin-top: 60vh !important;
    right: 57vw !important;
    width: 150px;
}
	p{
		font-size: 21px;
    }
</style>

<style scoped>
@media screen and (max-width: 900px){
	.tarifs {
	    display: flex;
	    flex-direction: column-reverse;
		position: absolute;
	    margin-top: 50vh !important;
	    right: 0vw !important;
	    width: 100vw !important;
	    text-align: center;
    }
    p{
		font-size: 21px;
    }
}
@media screen and (max-width: 1700px) {
	.coolCar.second {
		width: 47%;
	}
}
</style>
<style type="text/css">
	div.hidden-md-and-up.car-carousel[data-v-4af3098a] .v-responsive.v-image.v-carousel__item .v-image__image.v-image__image--cover {
    background-size: 90% !important;
}
	div.hidden-md-and-up.car-carousel[data-v-4af3098a] .v-responsive.v-image.v-carousel__item .v-responsive__content {
		display: flex !important;
	    flex-direction: column !important;
	    align-items: center !important;
}
</style>