<template>
	  <v-layout style="margin: 20px auto;" row wrap justify-start>
	  	<div class="static">
	  		
	  	<!-- <v-spacer></v-spacer> -->
	  	<v-flex offset-xs1 xs10>
	  	  
	    <v-flex 
	    px-2 mx-4 xs4 sm10 md9>
	      <p class=" neue"> Тарифы </p>
	      <p style="font-size: 18px; font-weight: 100; line-height: 21px; margin-bottom: 0" class="subtitlte">
	      	Вам будет подан автомобиль выбранного класса, без брендирования, водитель откроет для Вас дверь авто и встретит с зонтом в случае дождя.
	      </p>
	      <p style="font-size: 18px; font-weight: 100; line-height: 21px;" class="subtitlte">
	      	Закажите автомобиль прямо сейчас, либо к назначенному времени.
	      </p>
	    </v-flex>
	    <v-flex 
	    px-2 mx-4 xs10 sm10 md5 >
					<p style="display: inline-block; margin-right: 15px" 
				      	:class="$parent.city ==='SPb'? 'neue':'linkText neue'"
				      	@click="$parent.city = 'MSK'"> Москва </p>
					<p style ="display: inline-block"
				      	:class="$parent.city ==='MSK'? 'neue':'linkText neue'" 
				      	@click="$parent.city = 'SPb'"> Санкт-Петербург </p>
				<v-menu :close-on-content-click="false" style="display: block; box-shadow: none !important;" nudge-bottom="0" nudge-right="0" content-class="superCard" bottom>
			      	<template >
			      		<div @click="menuOpen = !menuOpen" slot="activator" class="driver-about">
			      			<p class="link linkText" v-on="on"> Условные границы города{{city}} </p>
			      		</div>
			      	</template>
			      	<v-card  class="superCard" style="width: 1000px; height: 441px;">
			      		<!-- <p style="display: inline-block; margin-right: 15px" 
							:class="$parent.city==='MSK'? 'neue':'linkText neue'" 
							@click="$parent.city = 'MSK'"> Москва </p>
						<p style="display: inline-block"
							:class="$parent.city==='SPb'? 'neue':'linkText neue'"
					      	@click="$parent.city = 'SPb'"> Санкт-Петербург </p> -->
				      				<!-- <v-icon class="clear">clear</v-icon> -->
			      				<div v-if="$parent.city === 'MSK'" style="border: 1px solid black; overflow:hidden;width: 100%; height: 100%;position: relative;">
			      					<iframe width="100%" height="100%" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Moscow%2C%20Russia+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
			      					<div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;">
			      						<small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by 
		      							<a href="https://embedgooglemaps.com/ru/">embedgooglemaps RU</a> & 
		      							<a href="https://iamsterdamcard.it">i amsterdamcard it</a>
			      						</small>
			      					</div>
			      					<style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
			      				</div>
			      					<div v-else style="border: 1px solid black;overflow:hidden;width: 100%; height: 100%;position: relative;">
			      						<iframe width="100%" height="100%" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Saint-Petersburg%2C%20Russia+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by 
			      							<a href="https://embedgooglemaps.com/it/">embedgooglemaps IT</a> & 
			      							<a href="https://iamsterdamcard.it">http://iamsterdamcard.it/</a>
			      						</small>
		      						</div>
		      						<style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
	      						</div>
			      </v-card>
			  </v-menu>


		    </v-flex>
	  	</v-flex>
	  	</div>
	  </v-layout>
</template>

<script>
	export default {
		// components: {
		// },
		data: () => ({
			// menuOpen: true,
		}),
			// props:['aboutBuisness'],
	}
</script>

<style type="text/css">
.neue{
	font-size: 36px;
	line-height: 36px;
	font-weight: 100;
	margin-top: 11px;
	margin-bottom: 15px;
	cursor: pointer;
}
</style>

<style scoped>
	.clear{
		position: absolute;
		background: white;
		z-index: 999;
		right: 10px;
		top: 10px;
	 }
</style>

<style type="text/css">
div[data-v-5571c6ec] .v-responsive__content{
    display: flex;
    align-self: flex-end;
    justify-content: center;
}
</style>