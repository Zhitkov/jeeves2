<template>
			<v-layout row wrap style="min-height: 430px; height: 60vh; max-height: 520px;">
		<v-flex xs12 style="height: 65vh;">
					<v-flex style="position: absolute; z-index: 9;margin-top: -5px;width: 33%;margin: -5px 33%;     display: flex;
    justify-content: center;">
						<img class="logo" :src="logo">
					</v-flex>
	<v-img cover :src="bg" style="width: 100vw; height: 100%">
				<v-flex xs12 class="fourth-block">
					<v-flex pt-3 offset-xs1 xs10 offset-md0 md12>
						<h1 class="neue big">СКАЧАТЬ ПРИЛОЖЕНИЕ ПРЯМО СЕЙЧАС</h1>
					</v-flex>
					<v-flex class="assistent-feedback" offset-md2 md8 offset-xs1 xs10 >
						<p style="color: white; font-weight: 300; text-align: center; font-size: 12px;">Введите номер телефона, чтобы получить ссылку на приложение </p>
						<div style="width: 468px; display: flex; justify-content: center;">
							<PhoneForm style="width: 226px; height: 48px;" :aboutBuisness="true"/>
							<v-btn style="border-radius: 10px; margin-top: 0; width: 226px; height: 48px;" large color="primary">Отправить</v-btn>
						</div>
					</v-flex>
					<appInstallButtons class="fourth-app-install"/>
				</v-flex>
				<v-flex  xs4 class="fourth-phone">
					<v-img
					xs5
					cover
					:src="phone"
					:lazy-src="phone"
					position="center 20%"
					>
				</v-img>
			</v-flex>
</v-img>
	</v-flex>
		</v-layout>
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
			logo: require('../../static/logos/logo2bg.svg'),
		    bg: require('../../static/Assistent/bg2.png'),
		}
	}
}
	
</script>

<style type="text/css" scoped>
	.assistent-feedback {
		 display: flex;
	    flex-direction: column;
	    align-items: center;
	}

</style>

<style type="text/css">
	.fourth-block .flex.pt-3.offset-xs1.xs10.offset-md0.md12 .neue.big {
		font-size: 72px;
		line-height: 64px;
		color: white;
	    text-align: center !important;
	}
	img {
		height: 20%;
	}
	.fourth-block {
		margin-top: 12%;
	}
	.fourth-app-install{
		margin-top: 22px;
	}
</style>