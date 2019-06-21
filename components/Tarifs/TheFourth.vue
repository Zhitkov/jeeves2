<template>
	<v-container pa-0 :style="'background-size: cover; background-image: url(' + bg + ')'" fluid>
		<v-layout row wrap class="hidden-sm-and-down hei100">
			<v-flex offset-xs2 xs5 class="fourth-container">
				<v-flex xs4 style="display: flex">
						<img :src="logo">
						<appInstallButtons class="fourth-app-install"/>
				</v-flex>
				<h1 class="neue" style="font-weight: 100;">Скачать приложение прямо сейчас</h1>
				<div class="phone-container">
					<p>Введите номер телефона, чтобы получить ссылку на приложение </p>
					<div style="display: flex">
						<PhoneForm/>
						<v-btn large color="primary">Отправить заявку</v-btn>
					</div>
				</div>
			</v-flex>
			<v-flex  xs5 style="margin-top: 0" class="fourth-container">
					<v-img
					xs5
					contain
                  :src="phone"
                  :lazy-src="phone"
                  position="90% top"
                  style="background-size: auto 100%;"
                >
	            </v-img>
	        </v-flex>
		</v-layout>
		<v-layout row wrap class="hidden-md-and-up">
		  <v-flex xs12 class="fourth-container">
				<v-flex xs4 style="display: flex">
					<v-flex xs6>
						<img :src="logo">
					</v-flex>
					<v-flex offset-xs7 xs6>
						<appInstallButtons class="fourth-app-install"/>
					</v-flex>
				</v-flex>
				<h1 class="neue" style="font-weight: 100;">Скачать приложение прямо сейчас</h1>
				<div class="phone-container">
					<p>Введите номер телефона, чтобы получить ссылку на приложение </p>
					<div style="display: flex">
						<PhoneForm/>
						<v-btn large color="primary">Отправить заявку</v-btn>
					</div>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
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
			bg: require('../../static/tarifs/Fourth/car.png'),
			phone: require('../../static/tarifs/Fourth/phones.png'),
			logo: require('../../static/logos/logo2.svg'),
		}
	}
}
	
</script>
<style lang="css" scoped>
	.neue {
	  font-size: 36px;
	  line-height: 36px; 
  	}
	.hei100, .v-image {
	    height: 100% !important;
	}
	.container {
		background-size: cover;
		width: 100vw;
		height: 42.7vh;
		color: white;
	}
	.fourth-container {
		margin-top: 45px;
	}
	.phone-container {
		display: flex;
		-webkit-flex-direction: column;
		    -ms-flex-direction: column;
		        flex-direction: column;
		margin: 1% 0% 0% 0%;
	}
	.fourth-app-install {
		text-align: left;
		flex-direction: column;
	    display: flex;
	}
	.v-btn {
	    margin: 2px 10px;
	}
</style>
<style scoped>
@media screen and (max-width: 900px){
	.container{
		height: 50vh;
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
	.v-image{
		display: none !important;
	}
	.phone-container > div{
		display: flex;
	    flex-direction: row;
	    align-items: flex-start;
	    padding-bottom: 0px;
	}
	.downloads{
	    text-align: center !important;
	}
}
</style>