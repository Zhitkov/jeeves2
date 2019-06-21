<template>
	<v-layout row wrap>
		<v-flex v-if="aboutBuisness">
			<v-flex xs12 >
				<v-text-field
				class="form-white"
				label="ФИО"
				light
		        background-color="#ffffff !important"
				outline
				v-model="name"
				></v-text-field>
			</v-flex>
			<v-flex xs12 >
				<v-text-field
				class="form-white"
				outline
		        background-color="#ffffff !important"
				light
				v-model="email"
				:rules="[rules.required, rules.email]"
				label="E-mail"
				></v-text-field>
			</v-flex>
			<v-flex xs12>
					<v-text-field
					class="form-white"
			        background-color="#ffffff !important"
					v-model="company"
					label="Компания"
					light
					outline
					></v-text-field>
			</v-flex>
			<v-flex xs12 style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: center;">
				<PhoneForm :aboutBuisness="true"/>

				<v-dialog
				v-model="dialog"
				width="500"
				:disabled="!(email && name && company)"
				>
				<v-btn slot="activator" style="border-radius: 10px; margin-top: 0px; width: 226px; height: 50px;" color="primary">Отправить заявку</v-btn>
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
					<v-btn
					color="primary"
					@click="dialog = false"
					slot="activator"
					>
					Завершить
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</v-flex>
</v-flex>
<v-flex v-else xs12>
	<v-flex xs12>
		<v-flex xs12 >
			<v-text-field
			label="Логин"
	        background-color="#ffffff !important"
			light
			outline
			class="form-white"
			></v-text-field>
		</v-flex>
	</v-flex>
	<v-flex xs12>
		<v-flex xs12 >
			<v-text-field
			class="form-white"
			outline
	        background-color="#ffffff !important"
			light
			v-model="password"
			:append-icon="show1 ? 'visibility' : 'visibility_off'"
			:rules="[rules.required, rules.min]"
			:type="show1 ? 'text' : 'password'"
			label="Пароль"
			hint="At least 8 characters"
			@click:append="show1 = !show1"
			></v-text-field>
		</v-flex>
	</v-flex>
	<v-flex xs12 justify-center style="flex-direction: column; display: flex; text-align: center;align-items: center;">
		<v-btn style="min-width: 50%; border-radius: 10px; width: 226px; height: 48px;" color="primary" large>Войти</v-btn>
		<a style="color:white; text-decoration: underline; font-weight: 100;" >Забыли пароль?</a>
	</v-flex>
</v-flex>
</v-layout>
</template>

<script>
	import PhoneForm from '~/components/layouts/PhoneForm.vue'

	export default {
		components: {
			PhoneForm,
		},
		data () {
			return {
				dialog: false,
				required: value => !!value || 'Required.',
				show1: false,
		        password: '',
		        company: '',
		        name: '',
				rules: {
					email: value => {
						const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						return pattern.test(value) || 'Invalid e-mail.'
					},
					required: value => !!value || 'Required.',
		            min: v => v.length >= 8 || 'Min 8 characters',
				}
			}
		},
		props:['aboutBuisness']
	}
</script>
<style>
.v-text-field--outline > .v-input__control > .v-input__slot{
		background: #fff !important;
		border-radius: 10px;
	}
	.form-white .v-input__control .v-input__slot {
		width: 468px !important;
		height: 28px !important;
		padding: auto 16px !important
	}
</style>
