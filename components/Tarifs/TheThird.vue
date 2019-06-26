<template>
	  	<div class="static">
	<v-container mb-5 pa-0 style="width: 100vw">
	  <v-layout v-for="car in cars" row wrap>
	  		<v-flex md12 xs12 class="car-block">
	    <v-flex class="third-car" style="display: flex; align-self: center;"
	     px-2 md7 xs12  >
	     <div class="arrows" @click="prevImg(car.saloon)"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.6731 1.25L1.25 14.6729L14.6731 28.0959" stroke="#707070" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></div>
	     <v-img class="car-current" style="width: 80%; max-height:210px;" :aspect-ratio="16/9" cover :src="car.saloon.current.img"></v-img>
	     <div class="arrows" @click="nextImg(car.saloon)"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.25 1.25L14.6731 14.6729L1.25 28.0959" stroke="#707070" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></div>
		    <div class="car-name">
		    	<p>{{ car.name }}</p>
		    	<v-spacer></v-spacer>
			     <div :class="car.saloon.current.active === i?'imgs-container-active':'imgs-container'" v-for="(img, i) in car.saloon.imgs">
		     	<v-img @click="currentImg(car.saloon, img, i)" style="width: 100%; height: 100%;" cover :src="img"></v-img>
			     </div>
		    </div>
	    </v-flex>
	    <v-flex px-4  md5  xs10>
	      	<b style="padding-bottom: 5px; font-weight: 500;">{{car.tarifName}}</b>
	      	<div v-if="$parent.city==='MSK'" v-for="(mskInfo, i) in car.info.msk" class="UpDownBorder">
	      		<div style="width: 30px"><img :src="icons[i]"/></div>
				<p>{{ tarifs[i].title }}</p>
				<v-spacer></v-spacer>
				<p>{{ mskInfo }} {{ tarifs[i].postfix }}</p>
	      	</div>
	      	<div v-else v-if="$parent.city==='SPb'" v-for="(spbInfo, i) in car.info.spb" class="UpDownBorder">
	      		<div style="width: 30px"><img :src="icons[i]"/></div>
				<p>{{ tarifs[i].title }}</p>
				<v-spacer></v-spacer>
				<p>{{ spbInfo }} {{ tarifs[i].postfix }}</p>
	      	</div>

	    </v-flex>
	</v-flex>
	    <v-flex xs12>
	    	 <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          	<div>
          		<div style="margin-top: 90px;" @click="car.active = !car.active" class="v-expansion-panel__header__icon"><p class="eapansion-title">Подробнее о тарифе</p><i aria-hidden="true" class="v-icon material-icons theme--light">keyboard_arrow_down</i></div>
    			<v-img v-if="!car.active" contain :src="carInfoBorder"></v-img>
    		</div>
        </template>
        <v-card>
          <v-card-text >
          	<v-flex px-2 mx-4 style="border-top: dashed 2px #C4C4C4; margin: 5px auto 30px " xs12></v-flex>
	  			<v-layout row wrap justify-center>
	  				<v-flex px-2 mx-4 style="display: flex;" row xs12>
	  				<v-flex pr-3 xs12 sm12 md6 offset-xs0>
	  				  <div v-for="left in car.about.left">
	  				  	<p style="margin-top: 15px; font-weight: 500" class="title">{{ left.title }}</p>
	  				  	<div v-if="left.subtitle">
	  				  		<p  style="font-weight: 300" v-for="subtitle in left.subtitle">
	  				  			{{ subtitle }}
	  				  		</p>
	  				  	</div>
	  				  	<div class="costAbout" v-if="left.subtitleCost">
	  				  		<div  class="UpDownBorder" v-for="aboutCost in left.subtitleCost">
	  				  			<p style="font-weight: 300">{{ aboutCost.text }}</p>
								<v-spacer></v-spacer>
	  				  			<p v-if="$parent.city==='MSK'" style="width: 120px;white-space: nowrap; font-weight: 800; text-align: end;">{{ aboutCost.cost.msk }}</p>
	  				  			<p v-else style="width: 120px;white-space: nowrap; font-weight: 800; text-align: end;">{{ aboutCost.cost.spb }}</p>

	  				  		</div>
	  				  	</div>
	  				  </div>
	  				</v-flex>
	  				<v-flex pl-3 xs11 sm11 md6 offset-xs0 >
	  				  <div v-for="right in car.about.right">
	  				  	<p style="margin-top: 15px; font-weight: 500" class="title">{{ right.title }}</p>
	  				  	<div v-if="right.subtitle">
	  				  		<p style="font-weight: 300" v-for="subtitle in right.subtitle">
	  				  			{{ subtitle }}
	  				  		</p>
	  				  	</div>
	  				  	<div v-if="right.subtitleCost && $parent.city==='MSK'">
	  				  		<div class="UpDownBorder" v-for="aboutCost in right.subtitleCost.msk">
	  				  			<p style="font-weight: 300">{{ aboutCost.text }}</p>
								<v-spacer></v-spacer>
	  				  			<p style="font-weight: 500">{{ aboutCost.cost }}</p>

	  				  		</div>
	  				  	</div>
	  				  	<div v-else>
	  				  		<div class="UpDownBorder" v-for="aboutCost in right.subtitleCost.spb">
	  				  			<p style="font-weight: 300">{{ aboutCost.text }}</p>
								<v-spacer></v-spacer>
	  				  			<p style="font-weight: 500">{{ aboutCost.cost }}</p>

	  				  		</div>
	  				  	</div>
	  				  </div>
	  				</v-flex>
	  				</v-flex>
	  				<v-flex xs12>
    					<v-img cover :src="carInfoBorder"></v-img>
	  				</v-flex>

	  			</v-layout>
	  			<v-img v-show="$vuetify.icons.expand===true" contain :src="carInfoBorder"></v-img>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
	    </v-flex>
	  </v-layout>
	</v-container>
	</div>
</template>
<script>
	export default {
		props:['city'],
	  	data() {
	  		return {
	  			carInfoBorder: require('../../static/tarifs/image.png'),
	  			icons: [
		    				require('../../static/tarifs/i1.svg'),
		    				require('../../static/tarifs/i2.svg'),
		    				require('../../static/tarifs/i3.svg'),
		    				require('../../static/tarifs/i4.svg'),
		    				require('../../static/tarifs/i5.svg'),
		    				require('../../static/tarifs/i6.svg'),
		    				require('../../static/tarifs/i7.svg'),
		    			],
    			tarifs:
    			[
    				{
    					title: "Пассажиры",
    					postfix: 'чел.'
    				},
    				{
    					title: "Багаж",
    					postfix: 'ед.'
    				},
    				{
    					title: "Подача авто",
    					postfix: '₽'
    				},
    				{
    					title: "Стоимость 1 км",
    					postfix: '₽'
    				},
    				{
    					title: "Стоимость 1 мин",
    					postfix: '₽'
    				},
    				{
    					title: "Минимальный заказ",
    					postfix: '₽'
    				},
    				{
    					title: "Бесплатное ожидание",
    					postfix: 'мин'
    				}
    			],
		    	cars:
		    	[
		    		{
		    			name: 'Mercedes-Benz E-class, BMW 5',
		    			active: false,
		    			tarifName: 'Бизнес',
		    			saloon: 
		    			{
		    				imgs: [
			    				require('../../static/cars/business1.png'),
			    				require('../../static/cars/buissnes/1.jpeg'),
			    				require('../../static/cars/buissnes/2.jpeg'),
			    				require('../../static/cars/buissnes/3.jpeg'),
		    				],
		    				current: {
		    					img: require('../../static/cars/business1.png'),
		    					active: 0
		    				}
		    			},
		    			info:
		    			{
			    			spb: [ 3, 3, 250, 19, 19, 450, 10 ],
			    			msk: [ 3, 3, 250, 21, 21, 500, 10 ],
		    			},
		    			about:
		    			{
		    				left:
		    				[
		    					{
		    						title:  'Минимальная стоимость поездки',
		    						subtitleCost: [
			    						{
			    							text: 'Условные границы города указаны на карте. При подаче в пределах города',
			    							cost: {
								    			spb: '500 ₽',
								    			msk: '450 ₽'
						    			},
			    						}
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Отмена поздки',
		    						subtitleCost: [
			    						{
			    							text: 'Отмена до прибытия автомобиля',
			    							cost: {
			    								spb: 'Бесплатно',
			    								msk: 'Бесплатно',
			    							},
			    						},
			    						{
			    							text: 'После подачи авто',
			    							cost: {
								    			spb: '500 ₽ + 35 ₽/мин',
								    			msk: '500 ₽ + 40 ₽/мин',
						    				},
			    						},
		    						],
		    						subtitle:''
			    				},
		    					{
		    						title:  'Ожидание и парковка',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Водитель бесплатно подождёт вас 10 минут. Каждая следующая минута ожидания оплачивается по тарифу. За частные парковки и проезд по платным дорогам пассажир платит самостоятельно. Также при согласовании со службой поддержки их может оплатить водитель. В таком случае дополнительные расходы будут добавлены к общему счёту за поездку.'
			    					]
		    					},
		    				],
		    				right:
		    				[
		    				{
		    						title:  'Трансферы из города в аэропорт и обратно',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Указаны фиксированные стоимости поездок без дополнительных остановок из или в черту города (условные границы обозначены на странице города). При поездке с остановками стоимость рассчитывается по основному тарифу, но не может быть меньше стоимости трансфера без остановок.'
			    					]
		    					},
		    					{
		    						// title:  'Отмена поздки',
		    						subtitleCost: {
						    			spb: [
											{
				    							text: 'Аэропорт Пулково',
				    							cost: '1350 ₽'
			    							},
						    			],
						    			msk: [
				    						{
				    							text: 'Аэропорт Внуково',
				    							cost: '2200 ₽'
				    						},
				    						{
				    							text: 'Аэропорт Домодедово',
				    							cost: '2500 ₽'
				    						},
				    						{
				    							text: 'Аэропорт Шереметьево ',
				    							cost: '2200 ₽'
				    						},
			    						],
						    			},
		    						subtitle:''

		    					},
		    					{
		    						title:  '',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Если при поездке в аэропорт вы укажете в комментарии к заказу номер рейса, мы встретим вас с табличкой в зоне прилёта. В таком случае стоимость платной парковки добавится к цене поездки.'
			    					]
		    					},
		    				],
		    			},
		    		},
		    		{
		    			name: 'Mercedes-Benz S-class, BMW 7',
		    			active: false,
		    			tarifName: 'VIP',
		    			saloon: 
		    			{
		    				imgs: [
			    				require('../../static/cars/vip1.png'),
			    				require('../../static/cars/vip/1.jpeg'),
			    				require('../../static/cars/vip/2.jpeg'),
			    				require('../../static/cars/vip/3.jpeg'),
		    				],
		    				current: {
		    					img: require('../../static/cars/vip1.png'),
		    					active: 0
		    				}
		    			},
		    			info:
		    			{
			    			spb: [ 3, 3, 450, 35, 35, 1000, 10 ],
			    			msk: [ 3, 3, 500, 40, 40, 1000, 10 ],
		    			},
		    			about:
		    			{
		    				left:
		    				[
		    					{
		    						title:  'Минимальная стоимость поездки',
		    						subtitleCost: [
			    						{
			    							text: 'Условные границы города указаны на карте. При подаче в пределах города',
			    							cost: {
							    			spb: '1000 ₽',
							    			msk: '1000 ₽'
						    			},
			    						}
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Отмена поздки',
		    						subtitleCost: [
			    						{
			    							text: 'Отмена до прибытия автомобиля',
			    							cost: {
			    								spb: 'Бесплатно',
			    								msk: 'Бесплатно',
			    							},
			    						},
			    						// {
			    						// 	text: 'Отмена спустя 5 мин после выезда автомобиля',
			    						// 	cost: '500 ₽'
			    						// },
			    						{
			    							text: 'После подачи авто',
			    							cost: {
								    			spb: '500 ₽ + 35 ₽/мин',
								    			msk: '500 ₽ + 40 ₽/мин'
						    				},
			    						},
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Ожидание и парковка',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Водитель бесплатно подождёт вас 10 минут. Каждая следующая минута ожидания оплачивается по тарифу. За частные парковки и проезд по платным дорогам пассажир платит самостоятельно. Также при согласовании со службой поддержки их может оплатить водитель. В таком случае дополнительные расходы будут добавлены к общему счёту за поездку.',
			    					]
		    					},
		    				],
		    				right:
		    				[
		    				{
		    						title:  'Трансферы из города в аэропорт и обратно',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Указаны фиксированные стоимости поездок без дополнительных остановок из или в черту города (условные границы обозначены на странице города). При поездке с остановками стоимость рассчитывается по основному тарифу, но не может быть меньше стоимости трансфера без остановок.'
			    					]
		    					},
		    					{
		    						// title:  'Отмена поздки',
		    						subtitleCost: {
							    			spb: [
											{
			    							text: 'Аэропорт Пулково',
			    							cost: '2800 ₽'
			    						},
							    			],
							    			msk: [
			    						{
			    							text: 'Аэропорт Внуково',
			    							cost: '4500 ₽'
			    						},
			    						{
			    							text: 'Аэропорт Домодедово',
			    							cost: '5000 ₽'
			    						},
			    						{
			    							text: 'Аэропорт Шереметьево ',
			    							cost: '4500 ₽'
			    						},
		    						],
						    			},
		    						subtitle:''

		    					},
		    					{
		    						title:  '',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Если при поездке в аэропорт вы укажете в комментарии к заказу номер рейса, мы встретим вас с табличкой в зоне прилёта. В таком случае стоимость платной парковки добавится к цене поездки.'
			    					]
		    					},
		    				],
		    			},
		    		},
		    		{
		    			name: 'Mercedes-Maybach S-class',
		    			active: false,
		    			tarifName: 'Премиум',
		    			saloon: 
		    			{
		    				imgs: [
			    				require('../../static/cars/premium1.png'),
			    				require('../../static/cars/premium/1.jpeg'),
			    				require('../../static/cars/premium/2.jpeg'),
			    				// require('../../static/cars/test/4.jpeg'),
		    				],
		    				current: {
		    					img: require('../../static/cars/premium1.png'),
		    					active: 0
		    				}
		    			},
		    			info:
		    			{
			    			spb: [ 3, 3, 500, 40, 40, 2000, 10 ],
			    			msk: [ 3, 3, 550, 45, 45, 2000, 10 ],
		    			},
		    			about:
		    			{
		    				left:
		    				[
		    					{
		    						title:  'Минимальная стоимость поездки',
		    						subtitleCost: [
			    						{
			    							text: 'Условные границы города указаны на карте. При подаче в пределах города',
			    							cost: {
							    			spb: '2000 ₽',
							    			msk: '2000 ₽'
						    			},
			    						}
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Отмена поздки',
		    						subtitleCost: [
			    						{
			    							text: 'Отмена до прибытия автомобиля',
			    							cost: {
			    								spb: 'Бесплатно',
			    								msk: 'Бесплатно',
			    							},
			    						},
			    						// {
			    						// 	text: 'Отмена спустя 5 мин после выезда автомобиля',
			    						// 	cost: '500 ₽'
			    						// },
			    						{
			    							text: 'После подачи авто',
			    							cost: {
							    			spb: '500 ₽ + 40 ₽/мин',
							    			msk: '550 ₽ + 45 ₽/мин'
						    			},
			    						},
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Ожидание и парковка',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Водитель бесплатно подождёт вас 10 минут. Каждая следующая минута ожидания оплачивается по тарифу. За частные парковки и проезд по платным дорогам пассажир платит самостоятельно. Также при согласовании со службой поддержки их может оплатить водитель. В таком случае дополнительные расходы будут добавлены к общему счёту за поездку.',
			    					]
		    					},
		    				],
		    				right:
		    				[
		    				{
		    						title:  'Трансферы из города в аэропорт и обратно',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Указаны фиксированные стоимости поездок без дополнительных остановок из или в черту города (условные границы обозначены на странице города). При поездке с остановками стоимость рассчитывается по основному тарифу, но не может быть меньше стоимости трансфера без остановок.'
			    					]
		    					},
		    					{
		    						// title:  'Отмена поздки',
		    						subtitleCost: {
							    			spb: [
											{
			    							text: 'Аэропорт Пулково',
			    							cost: '1350 ₽'
			    						},
							    			],
							    			msk: [
			    						{
			    							text: 'Аэропорт Внуково',
			    							cost: '2200 ₽'
			    						},
			    						{
			    							text: 'Аэропорт Домодедово',
			    							cost: '2500 ₽'
			    						},
			    						{
			    							text: 'Аэропорт Шереметьево ',
			    							cost: '2200 ₽'
			    						},
		    						],
						    			},
		    						subtitle:''

		    					},
		    					{
		    						title:  '',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Если при поездке в аэропорт вы укажете в комментарии к заказу номер рейса, мы встретим вас с табличкой в зоне прилёта. В таком случае стоимость платной парковки добавится к цене поездки.'
			    					]
		    					},
		    				],
		    			},
		    		},
		    		{
		    			name: 'Mercedes-Benz V-class',
		    			active: false,
		    			tarifName: 'Минивен',
		    			saloon: 
		    			{
		    				imgs: [
			    				require('../../static/cars/plus1.png'),
			    				require('../../static/cars/miniven/2.jpeg'),
			    				require('../../static/cars/miniven/1.jpeg'),
			    				// require('../../static/cars/test/4.jpeg'),
		    				],
		    				current: {
		    					img: require('../../static/cars/plus1.png'),
		    					active: 0
		    				}
		    			},
		    			info:
		    			{
			    			spb: [ 5, 3, 300, 25, 25, 2000, 10 ],
			    			msk: [ 5, 3, 350, 30, 30, 2500, 10 ],
		    			},
		    			about:
		    			{
		    				left:
		    				[
		    					{
		    						title:  'Минимальная стоимость поездки',
		    						subtitleCost: [
			    						{
			    							text: 'Условные границы города указаны на карте. При подаче в пределах города',
			    							cost: {
							    			spb: '2000 ₽',
							    			msk: '2500 ₽'
						    			},
			    						}
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Отмена поздки',
		    						subtitleCost: [
			    						{
			    							text: 'Отмена до прибытия автомобиля',
			    							cost: {
			    								spb: 'Бесплатно',
			    								msk: 'Бесплатно',
			    							},
			    						},
			    						// {
			    						// 	text: 'Отмена спустя 5 мин после выезда автомобиля',
			    						// 	cost: '500 ₽'
			    						// },
			    						{
			    							text: 'После подачи авто',
			    							cost: {
							    			spb: '300 ₽ + 25 ₽/мин',
							    			msk: '350 ₽ + 30 ₽/мин'
						    			},
			    						},
		    						],
		    						subtitle:''

		    					},
		    					{
		    						title:  'Ожидание и парковка',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Водитель бесплатно подождёт вас 10 минут. Каждая следующая минута ожидания оплачивается по тарифу. За частные парковки и проезд по платным дорогам пассажир платит самостоятельно. Также при согласовании со службой поддержки их может оплатить водитель. В таком случае дополнительные расходы будут добавлены к общему счёту за поездку.',
			    					]
		    					},
		    				],
		    				right:
		    				[
		    					{
		    						title:  'Трансферы из города в аэропорт и обратно',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Указаны фиксированные стоимости поездок без дополнительных остановок из или в черту города (условные границы обозначены на странице города). При поездке с остановками стоимость рассчитывается по основному тарифу, но не может быть меньше стоимости трансфера без остановок.'
			    					]
		    					},
		    					{
		    						// title:  'Отмена поздки',
		    						subtitleCost: {
							    			spb: [
											{
			    							text: 'Аэропорт Пулково',
			    							cost: '3800 ₽'
			    						},
							    			],
							    			msk: [
			    						{
			    							text: 'Аэропорт Внуково',
			    							cost: '5500 ₽'
			    						},
			    						{
			    							text: 'Аэропорт Домодедово',
			    							cost: '6000 ₽'
			    						},
			    						{
			    							text: 'Аэропорт Шереметьево ',
			    							cost: '5500 ₽'
			    						},
		    						],
						    			},
		    						subtitle:''

		    					},
		    					{
		    						title:  '',
		    						subtitleCost: '',
		    						subtitle:
		    						[
			    						'Если при поездке в аэропорт вы укажете в комментарии к заказу номер рейса, мы встретим вас с табличкой в зоне прилёта. В таком случае стоимость платной парковки добавится к цене поездки.'
			    					]
		    					},
		    				],
		    			},
		    		},
		    	]
		    }
    },
    methods: {
    	currentImg: function (saloon, img, active) {
    		saloon.current.img = img;
    		saloon.current.active = active;
    	},
    	nextImg: function (saloon) {
    		saloon.current.img = saloon.current.active!==saloon.imgs.length-1?saloon.imgs[saloon.current.active + 1]:saloon.imgs[0];
    		saloon.current.active = saloon.current.active!==saloon.imgs.length-1?saloon.current.active + 1:0;
    	},
    	prevImg: function (saloon) {
    		saloon.current.img = saloon.current.active!==0?saloon.imgs[saloon.current.active - 1]:saloon.imgs[saloon.imgs.length-1];
    		saloon.current.active = saloon.current.active!==0?saloon.current.active - 1:saloon.imgs.length-1;
    	},
    }
  }
</script>
<style type="text/css">

p{
	font-weight: 300
}
div[data-v-56608fae] .v-responsive.v-image.v-carousel__item .v-image__image--contain{
    background-size: 90%;
}
.v-expansion-panel__header__icon:last-child {
	display: none
}
.v-expansion-panel__header__icon:first-child {
    display: flex;
    justify-content: center;
}
/*.v-expansion-panel__header{
	background: #E4E4E4;
	display: flex; 
    flex-direction: column; 
}
.v-expansion-panel__body{
	background: #E4E4E4
}*/
.v-window-item[data-v-56608fae] .v-responsive.v-image.v-carousel__item .v-responsive__sizer {
	padding-bottom: 60.3333% !important;
}
.v-responsive.v-image.car-current .v-image__image.v-image__image--cover {
	background-size: 90% !important;
}
</style>
<style scoped>
.arrows {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 5px;
}
.car-block {
	display: flex; 
	flex-direction: row;
}
.third-car{
    display: flex;
}
.costAbout>.UpDownBorder:first-child{
	border-bottom: none
}
.costAbout>.UpDownBorder:nth-child(2){
	border-top: 1px solid gray
}
.car-name{
	height: 45px;
	font-weight: 800;
	font-size: 18px;
	position: absolute;
    margin-top: 316px;
    z-index: 4;
    display: flex; 
    flex-direction: row;
    max-width: 650px; 
    min-width: 520px; 
    width: 40%; 
    align-items: flex-end;
}
.imgs-container {
	width: 35px; 
	height: 35px; 
	border: 1px solid #000000;
	margin: auto 6px;
	opacity: 0.2;
	transition: .5s;
}
.imgs-container:hover {
	width: 45px; 
	height: 45px; 
	margin: auto 6px;
	opacity: 1;
	border: 1px solid #136CE2;
	transition: .5s;
}
.imgs-container-active {
	width: 45px; 
	height: 45px; 
	margin: auto 6px;
	opacity: 1;
	border: 1px solid #136CE2;
	transition: .5s;
}
.car-name > p {
	margin-bottom: 0; 
	font-weight: 800;
}

.theme--light.v-expansion-panel .v-expansion-panel__container{
	background-color: none
}
.eapansion-title {
	font-weight: 500;
	font-size: 18px;
	margin-bottom: 0;
}
.v-expansion-panel{
    box-shadow: none;
}
b{
	font-size: 20px;
	line-height: 23px;
	color: #136CE2;
    border-bottom: 1px solid gray;
    display: block;
    padding-bottom: 15px;
}
.UpDownBorder > svg {
	margin-right: 12px;
}
.UpDownBorder{
	display: flex;
    border-bottom: 1px solid gray;
    align-items: center;
    height: 12.5%;
    max-height: 42px;
}

.UpDownBorder:first-child {
    border-top: 0px solid gray;

}
.UpDownBorder>p:last-child {
	width: 50px;
	text-align: left;
	font-weight: 500;
}
.UpDownBorder>p {
    margin-left: 0px !important;
    margin: 15px;
    font-size: 14px;
}

@media screen and (max-width: 900px){
	.car-block {
		display: flex; 
		flex-direction: column !important;
	}
}
/*.v-carousel__controls__item > .v-icon.material-icons.theme--dark{
	display: none !important;
}
.v-carousel__controls__item > .v-btn__content{
	display: none !important;
}*/
/*button.v-carousel__controls__item{
    background-image: url(http://localhost:3000/_nuxt/static/tarifs/cars/plus1.png);
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}*/
/*.v-carousel__controls:first-child{
	display: none !important;
}*/


</style>