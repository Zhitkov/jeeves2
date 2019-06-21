<template>
	<v-img class="parallax-screen" cover :src="bg" :lazy-src="bg" style="min-height: 1000px !important">
		<v-layout style="color: white; padding-top: 20vh; display: flex; justify-content: center; padding-bottom: 90px;" row wrap>
			<div class="static">
			<v-flex xs12 style="display: flex;flex-direction: row; flex-wrap: wrap;">
				<v-flex px-4 xs6>
					<p class="title neue">Корпоративное Обслуживание</p>
						<p class="text">JEEVES — надежный партнер!</p>
						<p class="text">Основным принципом работы компании, является высочайший уровень предоставляемых услуг. Вы можете возложить на нас задачи от сопровождения первых лиц и встреч делегаций в аэропорту, до обслуживания мероприятий и развоза сотрудников компании по домам. </p>
						<p class="text">К Вашим услугам парк новых премиальных и бизнес-класс автомобилей, никакого брендирования, полный комфорт и безопасность во время поездки.</p>
						<p class="text">Только лучшие водители, прошедшие строгий отбор, неукоснительно соблюдающие стандарты обслуживания и владеющие иностранными языками.</p>
				</v-flex>
				<v-flex xs12 md5 pl-5 style="min-width: 520px; ">
						<p class="title neue">Заявка</p>
						<Form  :aboutBuisness="true"/>
				</v-flex>
				<v-flex  xs12>
					<AboutVector style="margin-top: 118px; margin-bottom: 200px" :aboutBuisness="true"/>
				</v-flex>
			</v-flex>
			</div>
		</v-flex>
	</v-layout>
</v-img>
</template>

<script>
import AboutVector from '~/components/layouts/AboutVector.vue'
import Form from '~/components/layouts/Form.vue'

export default {
	components: {
      AboutVector,
      Form
    },
	data () {
		return {
			bg: require('../../static/Buisness/bg.png'),
		}
	}
}
	
</script>
<style scoped>
.parallax-screen{
  width: 100vw;
  height: 110vh;
  min-height: 900px;
}
.title{
	font-size: 38px !important;
    text-align: center;
    margin-bottom: 37px;
}
.text{
	font-weight: 300;
	font-size: 18px;
	line-height: 100%;
    text-align: justify;
}
</style>
<style>
	.v-parallax__content {
	padding: 0 !important;
}
div[data-v-f69ed9a2] .flex .flex.xs12 .v-input.form-white.v-text-field.v-text-field--enclosed.v-text-field--outline.theme--light .v-input__control .v-input__slot {
	background: white !important
}
@media screen and (max-width: 1700px) {
	 .v-parallax__image-container .v-parallax__image{
		transform: translate(-50%, 31px) !important;
	}
}
@media screen and (max-width: 900px) {
	 .v-parallax__image-container .v-parallax__image{
		transform: translate(-50%, 10px) !important;
	}
}
</style>
