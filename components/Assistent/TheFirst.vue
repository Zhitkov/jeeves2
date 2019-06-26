<template>
  <v-layout justify-center class="full-screen" row wrap>
    <v-img class="parallax-screen change" dark cover :src="bg">
      <!-- <v-flex offset-xs2 xs2>
        <img style="padding-bottom: 42px;" :src="logo">
      </v-flex> -->
    </v-img>
    <div class="static">
  	<v-flex  md7 xs10>
		<p  class="assistent-title"> <b style="color: #3c96f3">JEEVES</b> — это не просто личный водитель на премиальном автомобиле, это личный ассистент! </p>
		<p class="text1">В основе нашей философии лежит желание, вернуть Вам время для занятия действительно важными и интересными делами</p>
		<p class="text1">Позвольте ассистенту избавить Вас от суеты повседневных задач</p>
		<p class="text1">Оперативно и четко справимся с любым поручением, от встречи в аэропорту с табличкой и сопровождения первых лиц до доставки цветов и поисков игрушки для Вашего ребенка.</p>
    <v-flex offset-md12 md2>
      <img class="phone" :src="phone"></img>
  </v-flex>
    </v-flex>
    <v-flex mr-4 my-2 class="assistent-text" xs12>
    <v-flex px-1 style="display: flex; flex-direction: column; justify-content: center;" class="text2" v-for="text2 in texts2" md5 xs10>
			<h2 class="title">
				{{ text2.title }}
			</h2>
			<p class="subtitle">
				{{ text2.subtitle }}
			</p>
    </v-flex>
    </v-flex>
    </div>
  </v-layout>
</template>

<script>
// import AboutVector from '~/components/layouts/AboutVector.vue'
// import DriverForm from '~/components/Drivers/DriverForm.vue'

  export default {
    components: {
      // AboutVector,
      // DriverForm

    },
    data () {
      return {
        phone: require('../../static/Assistent/phone.png'),
        bg: require('../../static/Assistent/bg.png'),
        texts2: 
        [
        	{
        		title: ' Открытый перечень услуг',
        		subtitle: 'Мы с трепетом относимся к своим клиентам, и не хотим ограничивать Вас каким либо перечнем доступных услуг, готовы принять в работу практически любое Ваше поручение.'

        	},
        	{
        		title: 'C нами удобно',
        		subtitle: 'Вы можете дать поручение в любом месте и в любое время, на случай когда «не удобно говорить» мы предусмотрели для Вас онлайн чат с поддержкой 24/7'
        	},
        	{
        		title: 'Минимизация расходов',
        		subtitle: 'Никакой абонентской платы и бюджетов на зарплату, пользуйтесь услугами личного ассистента тогда и столько, сколько необходимо Вам.'

        	},
        ]
      }
    },
    methods: {
    //   completeNext﻿: function () {
    //   var tl = new TimelineMax;
    //   tl.add(
    //         TweenLite.to('.opa', 1, {opacity: 1}),
    //       );

    // },
  }
}
</script>

<style lang="stylus" scoped>
.assistent-text 
  display: flex; flex-direction: row; justify-content: center;
.static
  flex-direction: column;
.phone 
  position: absolute;
  top: 150px;
  // width: 25%;
  // min-width 450px; 
  height: 42%;
.v-responsive__content
  align-self: flex-end;
.full-screen
  width 100vw
div[data-v-00bd8e1c].container
  align-items: flex-end !important
.parallax-screen
  width 100vw
  height 65vh !important
  .container
    align-content: center;
    align-items: center;
    align-self: center;
    display: flex;
.First-text
  text-align center 
.downloads
  margin-bottom 10vw 
.text2
	color #1D1919
	.title
		font-size: 30px;
		line-height: 35px;
		margin 20px 0;
		font-weight 500 !important
	.subtitle
		font-weight: 300;
		font-size: 16px;
		line-height: 25px;
	&:last-child
		// padding-bottom 140px
	
</style>
<style scoped>
.assistent-title {
	font-weight: 500;
	font-size: 30px;
  line-height: 35px;
	margin-bottom: 50px;
}
.text1 {
  font-size: 21px !important;
  margin-top: 35px;
  line-height: 25px;
  font-weight: 500;
}
.title{
  font-weight: 500;
}
@media screen and (max-width: 900px){
  .driver-title {
	  font-size: 23px;
	  margin-bottom: 75px;
	  margin-top: 55px;
}
.assistent-text {
    flex-direction: column !imporatnt;
}
.phone {
  display: none;
}
.big {
      font-size: 31px;
}
  .First-text{
    font-size: 20px; 
    margin: 5% 10% 1%;
  }
  .parallax-screen{
    height: 100vh !important;
  }
}

</style>

