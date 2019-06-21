<template>
	<v-layout px-4 style="display: flex; justify-content: center;" row wrap>
		<div style="flex-direction: column;" class="static">
			<div style="display: flex;">
		<v-flex  md3 xs10 style="display: flex; justify-content: center;">
	      <v-menu nudge-bottom="30" nudge-right="10" :close-on-click="menuOpen" :close-on-content-click="menuOpen" bottom left>
	      		<div @click="menuOpen = !menuOpen" slot="activator" class="driver-about">
	      			<p class="linkText">Требования к атомобилям</p>
	      			<v-icon>expand_more</v-icon>
					<div style="margin-top: 22px; margin-left: 87px;" v-if="!menuOpen" class="tooltip-arrow-up"></div>
	      		</div>
	      	<v-card class="superCard">
	      		<v-card-tile style="background: white !important;">
	      		<v-card-tile-title style="">
	      			<ul class="forCars">
	      				<v-icon @click="menuOpen = !menuOpen" class="clear">clear</v-icon>
	      				<li>Бизнес <v-spacer></v-spacer> <b> Mercedes E-Class, BMW 5</b></li>
	      				<li>VIP <v-spacer></v-spacer> <b> Mercedes-Benz S-class, BMW 7</b></li>
	      				<li>Премиум <v-spacer></v-spacer> <b> Mercedes-Maybach S-class</b></li>
	      				<li>Минивен <v-spacer></v-spacer> <b> Mercedes-Benz V-class</b></li>
	      				<b class="about">Возраст авто не старше 3-х лет, только черный и белый цвета, салон кожа или кожзаменитель, отсутствие каких либо дефектов.</b>
	      			</ul>
	      		</v-card-tile-title>
	      	</v-card-tile>
	      </v-card>
	  </v-menu>
	</v-flex>
	 <v-flex  md2 xs10 style="display: flex; justify-content: center;">

	  	<v-menu id="app2" nudge-bottom="30" nudge-left="100" :close-on-click="menuOpen2" :close-on-content-click="menuOpen2" bottom right>
	      		<div @click="menuOpen2 = !menuOpen2" slot="activator" class="driver-about">
	      			<p class="linkText">Требования к водителям</p> 
		  			<v-icon>expand_more</v-icon>
					<div style="margin-top: 22px; margin-left: 82px;" v-if="!menuOpen2" class="tooltip-arrow-up"></div>
	      		</div>
	      	<v-card class="superCard">
	      		<v-card-tile style="background: white !important;">
	      		<v-card-tile-title style="">
	      			<ul class="forDrivers">
	      				<v-icon @click="menuOpen2 = !menuOpen2" class="clear">clear</v-icon>
	      				<b class="about">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона,</b>
	      				<ol>
	      					<li>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.</li>
	      					<li>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.</li>
	      					<li>Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum.</li>
	      					<li>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.</li>
	      					<li> Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.</li>
	      					<li>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.</li>
	      				</ol>
	      			</ul>
	      		</v-card-tile-title>
	      	</v-card-tile>
	      </v-card>
	  </v-menu>
</v-flex>
</div>
<div style="display: flex;">
<v-flex ml-4 xs10 md7>
	<v-flex md9 xs12 >
		<v-select
		class='driver-select'
		:items="cities"
		v-model="city"
		label="Город"
		outline
		background-color="#fff"
		></v-select>
	</v-flex>
	<v-flex md9 xs12 >
		<v-select
		class='driver-select'
		:items="workers"
		v-model="worker"
		label="Желаемый тип сотрудничества"
		outline
		background-color="#fff"
		></v-select>
	</v-flex>
	<v-flex md9 xs12 >
		<v-text-field
		class="form-white"
		label="ФИО"
		v-model="name"
		outline
		></v-text-field>
	</v-flex>
	<v-flex md9 xs12 >
		<v-text-field
		class="form-white"
		outline
		v-model="email"
		:rules="[rules.required, rules.email]"
		label="E-mail"
		></v-text-field>
	</v-flex>
	<v-flex md8 xs12 style="display: flex;">
		<PhoneForm class="driver-phone" :aboutBuisness="true" style="width: 50%; margin-right: 12px;"/>
		<v-dialog
				:disabled="!(email && name && city && worker)"
				width="500"
				>
				<v-btn slot="activator" style="border-radius: 3px; margin-top: 0px; width: 226px; height: 50px;" color="primary">Отправить заявку </v-btn>
				<v-card>
					<v-card-title
					class="headline lighten-2"
					primary-title
					style="display: flex; justify-content: center;"
					>
					<span class="neue" style="font-size: 38px !important;">Спасибо</span>
					<b style="font-size: 21px; line-height: 25px; text-align: center; font-weight: 500;">Заявка принята, наш специалист свяжется с Вами в ближайшее время.</b>
				</v-card-title>

				<v-card-actions>
					<v-spacer></v-spacer>
					<!-- <v-btn
					color="primary"
					@click="dialog = false"
					slot="activator"
					>
					Завершить
				</v-btn> -->
			</v-card-actions>
		</v-card>
	</v-dialog>
	</v-flex>
</v-flex>
<v-flex xs4 class="steps">
	<v-flex class="step" xs1 >
		<p class="step-title"> Заявка на сайте </p>
		<v-text-field
		label="1"
		outline
		disabled
		></v-text-field>
	</v-flex>
	<v-flex class="step" xs1 >
		<p class="step-title"> Собеседование </p>
		<v-text-field
		label="2"
		outline
		disabled
		></v-text-field>
	</v-flex>
	<v-flex class="step" xs1 >
		<p class="step-title"> Тест на вождение и знание города </p>
		<v-text-field
		label="3"
		outline
		disabled
		></v-text-field>
	</v-flex>
	<v-flex class="step" xs1 >
		<p class="step-title"> Внутреннее обучение </p>
		<v-text-field
		label="4"
		outline
		disabled
		></v-text-field>
	</v-flex>
	<v-flex class="step" xs1 >
		<p class="step-title"> Вы в команде </p>
		<v-text-field
		label="5"
		outline
		disabled
		></v-text-field>
	</v-flex>
</v-flex>
</div>
</div>
</v-layout>
</template>


<script>
	import PhoneForm from '~/components/layouts/PhoneForm.vue'

	export default {
		components: {
			PhoneForm,
		},
		data: () => ({
			workers: ['Водитель на нашем автомобиле', 'Водитель на своем автомобиле', 'автопарк'],
			worker: '',
			name: '',
			email:'',
			cities: ['Москва', 'Санкт-Петербург'],
			city: '',
			rules: {
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
				},
				required: value => !!value || 'Required.',
			},
			menuOpen: true,
			menuOpen2: true,
		}),
			props:['aboutBuisness'],
	}
</script>

<style type="text/css">

.step > .theme--light.v-text-field--outline > .v-input__control > .v-input__slot {
	    padding: 0px 21px !important;
}

.v-input.form-white.v-text-field.v-text-field--enclosed.v-text-field--outline.theme--light .v-input__control .v-input__slot {
    	width: 468px !important;
		height: 40px !important;
    }
.phone-form2 .v-input .v-input__control .v-input__slot {
    border: 0.3px solid #1D1919 !important;
}
.driver-select .v-input__control .v-input__slot .v-select__slot .v-label.theme--light{
	color: black !important;
	font-weight: 300;
}
.steps {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.step{
    min-width: 54px !important;
    border-radius: 3px;
}
	.step .v-input__slot label{
		color: #000 !important;
	}
	.step .v-input__slot{
		padding: 0 20px !important;
		border-radius: 3px !important;
	}
	.step-title{
		font-weight: 500;
		font-size: 20px;
		position: absolute;
		margin-left: 80px;
	    margin-top: 13px;
	}
	.driver-phone .v-input__slot {
		    border: 1px solid gray !important;
	}

</style>
<style scoped>
	.driver-select {
		width: 468px !important;
	}
	.driver-about > p {
		margin-bottom: 0px;
	}
	.superCard {
		width: 40vw;
		max-width: 650px;
		padding: 30px;
		height: 430px;
	}
	.driver-about{
		display: flex;
		-webkit-justify-content: center;
		        justify-content: center;
		margin-bottom: 30px;
	}
	.forCars {
		background: white;
		width: 90%;
		text-align: center;
	}
	.forCars ul  {
		width: 100%;
	}
	.step-title .v-input.v-text-field.v-text-field--enclosed.v-text-field--outline.v-input--is-disabled.theme--light .v-input__control .v-input__slot {
		text-align: center !important;
	}
	.forCars li  {
		text-decoration: none;
		list-style: none;
		width: 100%;
		display: flex;
	    margin-left: 0px !important;
	    padding: 13px;
	    font-size: 18px;
	    border-bottom: 1px solid gray;
	}
	ul > li:nth-child(5)  {
	    margin-bottom: 20px !important;
	}
	.about {
		color: #2196f3 !important;
	}
	.forDrivers > ol > li {
		font-weight: 300;
		font-size: 14px;
		line-height: 16px;
		margin: 10px 0;
	}

    div.tooltip-arrow-up {
		/*border-left: 10px solid #00000000;
		border-right: 10px solid #00000000;
		border-bottom: 10px solid red;*/
		width: 15px;
		height: 15px;
		transform: rotate(45deg);
		background-color: #FFF;
		box-shadow: inset 1px 1px 1px 0px #000000a0;
		position: absolute;
		z-index: 9999999;
    }
    .clear{
    	position: absolute; 
    	right: 10px; 
    	top: 10px; 
    	cursor: pointer
    }
    .v-menu__content.theme--light.menuable__content__active{
		box-shadow: 0px 0px 2px 0px;
		width: 40vw;
		max-width: 650px
    }
    

@media screen and (max-width: 900px){
	    .steps {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	}
	.v-menu__content.theme--light.menuable__content__active {
		margin-top: .2vh !important;
		left: 0vw !important;
		width: 100% !important;
	}
	.superCard {
		left: 0vw;
		width: 100vw;
		max-width: 100vw;
		padding: 0px;
		height: 100%;
	}
}
</style>