<template>
	<v-layout style="display: flex; justify-content: space-around;" v-if="aboutBuisness" row wrap>
			<v-flex style="min-width: 185px" v-for="icon in buisness" sm10 md2>
				<img style="height: 66px;" :src="icon.i">
				<p class="title2">{{icon.text}} </p>
			</v-flex>
	</v-layout>
	<v-layout style="display: flex;justify-content: space-around;"  v-else row wrap>
			<v-flex v-for="icon in drivers" sm10 md2>
				<img style="height: 66px;" :src="icon.i">
				<p class="title2">{{icon.text}} </p>
			</v-flex>
	</v-layout>
</template>
<script>
export default {
  	data() {
  		return {
  			drivers: 
  			[
	  			{
	  				text: 'Выплаты каждую неделю',
		  			i: require('../../static/Drivers/i/i1.svg'),
	  			},
	  			{
	  				text: 'Вы сами определяете график по которому работаете',
		  			i: require('../../static/Drivers/i/i2.svg'),
	  			},
	  			{
	  				text: 'Возможность получать крупные чаевые, они только Ваши',
		  			i: require('../../static/Drivers/i/i3.svg'),
	  			},
	  			{
	  				text: 'С нашими клиентами действительно приятно работать',
		  			i: require('../../static/Drivers/i/i4.svg'),
	  			},
  			],
  			buisness:
  			[
	  			{
	  				text: 'Без затрат на приобретение и обслуживание авто, содержание сотрудников.',
		  			i: require('../../static/Buisness/i/i1.svg'),
	  			},
	  			{
	  				text: 'Оплата поездок по безналичному расчету',
		  			i: require('../../static/Buisness/i/i2.svg'),
	  			},
	  			{
	  				text: 'Общий корпоративный счет. Один договор во всех городах присутствия  ',
		  			i: require('../../static/Buisness/i/i3.svg'),
	  			},
	  			{
	  				text: 'Отсрочка платежа (после заключения договора)',
		  			i: require('../../static/Buisness/i/i4.svg'),
	  			},
	  			{
	  				text: 'Личный кабинет',
		  			i: require('../../static/Buisness/i/i5.svg'),
	  			},
	  			{
	  				text: 'Возможность установки лимитов для сотрудников',
		  			i: require('../../static/Buisness/i/i6.svg'),
	  			},
  			]
  		}
	},
	props:['aboutBuisness']
}
</script>
<style scoped>
	.flex.sm10.md2 {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    padding: 10px;
    }
    .flex.sm10.md2 .title2 {
    	font-weight: 300;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
    	padding-top: 15px;
    	min-width: 180px;
    	min-width: 15%;
    }
    .flex.sm10.md2 .title3 {
    	font-size: 14px !important;
    	font-weight: 100;
    	text-align: center;
    	padding-top: 15px;
    }
</style>
<style scoped>
@media screen and (max-width: 900px) {
	.flex.sm10.md2 {
		width: 40vw;
	}
}
</style>