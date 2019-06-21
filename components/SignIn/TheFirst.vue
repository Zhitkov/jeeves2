<template>
	<v-parallax class="sign-in parallax-screen" cover :src="bg" :lazy-src="bg">
			<div class="static">
		<v-layout style=" width: 100vw;" row wrap>
		  <v-flex offset-md1 md3 justify-start>
		    <v-img style="width: 254px; height: 462px;" :src="logo"></v-img>
		  </v-flex>
		  <v-flex pr-5 style="display: flex; flex-direction: column; align-items: center;" offset-md3 md4  xs10>
		    <p class="title">Вход в личный кабинет</p>
		    <Form :aboutBuisness="false"/>
		  </v-flex>
		</v-layout>
			</div>
  </v-parallax>
</template>

<script>
import Form from '~/components/layouts/Form.vue'


export default {
	components: {
      Form,
    },
	data () {
		return {
			bg: require('../../static/Signin/bg.png'),
			logo: require('../../static/logos/logo.svg')
		}
	}
}
	
</script>
<style scoped>
.title{
	font-size: 30px !important;
    text-align: center;
    margin-bottom: 20px;
}
.text{
	font-size: 18px;
	font-weight: 100
}
.logo{
	display: flex;
    justify-content: flex-start;
}
</style>
<style>
	.v-parallax__content {
	padding: 0 !important;
}
.sign-in .v-parallax__image {
    min-height: 130vh !important;
}
</style>
