<template>
		<v-flex xs12 style="height: 70vh; min-height: 520px;">
	<v-img cover :src="bg" style="width: 100vw; max-height:70vh; min-height: 700px;">
			<v-layout style="display: flex; justify-content: center;" row wrap>
				<div class="static">
				<v-flex px-2 md6 xs12 class="fourth-block">
					<img style="width: 247.11px; height: 87.11px;" :src="logo">
					<h1 class="neue">Мобильное приложение</h1>
					<div class="phone-container">
						<p>Введите номер телефона, чтобы получить ссылку на приложение </p>
						<div style="display: flex">
							<PhoneForm/>
							<v-btn style="width: 226px; height: 48px;" large color="primary text-capitalise">Отправить заявку</v-btn>
						</div>
					</div>
					<appInstallButtons class="fourth-app-install"/>
				</v-flex>
				<v-flex  xs6 class="fourth-phone">
					<v-img
					xs5
					:src="phone"
					:lazy-src="phone"
					position="60% 0%"
					class="phone"
					>
				</v-img>
			</v-flex>
			</div>
		</v-layout>
</v-img>
	</v-flex>
</template>
<script>
import appInstallButtons from '~/components/layouts/appInstallButtons.vue'
import PhoneForm from '~/components/layouts/PhoneForm.vue'

export default {
	components: {
      appInstallButtons,
      PhoneForm,
    },
	data () {
		return {
			phone: require('../../static/Home/Fourth/iphone.png'),
			logo: require('../../static/logos/logo2.svg'),
		    bg: require('../../static/Home/Fourth/bg.png'),
		}
	}
}
	
</script>
<style lang="css" scoped>
	.neue {
	  font-size: 50px;
	  line-height: 36px; 
	  font-weight: 100;
	  color: white;
		padding-left: 8px;
  	}
	.fourth-block {
		margin-top: 60px;
	}
	.phone-container {
		font-weight: 300;
		display: flex;
		-webkit-flex-direction: column;
		    -ms-flex-direction: column;
		        flex-direction: column;
		margin: 115px 0% 0%;
	}
	.phone-container > p {
		color: #FFF;
	}
	.fourth-app-install{
		margin-top: -10px !important;
	    float: left;
	}
	.phone-form {
		width: 226px;
	}
	.fourth-app-install {
		text-align: left;
	}
	.v-btn {
	    margin: 0px 10px;
	}
</style>
<style scoped>


@media screen and (max-width: 1400px){
.fourth-container {
		margin-top: 45px;
	}
}
@media screen and (max-width: 900px){
	.fourth-container {
		margin-top: 45px;
	    padding-left: 0;
	}
	.container{
		max-height: 80vh;
	    padding: 20px !important;
    }
    .v-btn--large {
	    font-size: 15px;
	    height: 44px;
	    padding: 0 16px;
	}
	.fourth-app-install{
		text-align: center !important;
	}
	.fourth-phone {
		display: none;
	}
	.phone-container > div{
		display: flex;
	    flex-direction: column;
	    align-items: center;
	    padding-bottom: 10px;
	}
	.downloads{
	    text-align: center !important;
	}
}
.v-responsive__content {
	    min-height: 70vh;
}
</style>
<style type="text/css">
.phone .v-image__image.v-image__image--cover {
	background-size: 130%
}
</style>