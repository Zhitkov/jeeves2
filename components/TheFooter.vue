<template>
	<v-footer
	dark
	height="auto"
	>
	<v-card
	class="flex"
	flat
	style="display: flex; justify-content: center;"
	>
		<div class="static">
	<v-layout row wrap>

		<v-flex pl-2 xs3>

			<v-card-title class="size">
				<v-img :src="logo" contain></v-img>
				<strong class="subheading">
					<ul>
						<nuxt-link tag="li" to="/drivers">Водителям</nuxt-link>
						<li>Вакансии</li>
						<li>FAQ </li>
					</ul>
				</strong>

				<v-spacer></v-spacer>


			</v-card-title>
		</v-flex>
		<v-flex xs9 style="display: flex;justify-content: flex-end; margin-top: 10px">

		<a href="https://www.instagram.com/jeeves_app/">
		<v-btn
		class="icons"
		dark
		icon
		>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0ZM15.0586 22.8516C10.6968 22.8516 7.14844 19.3032 7.14844 14.9414C7.14844 10.5796 10.6968 7.03125 15.0586 7.03125C19.4204 7.03125 22.9688 10.5796 22.9688 14.9414C22.9688 19.3032 19.4204 22.8516 15.0586 22.8516ZM23.8477 8.78906C22.3938 8.78906 21.2109 7.6062 21.2109 6.15234C21.2109 4.69849 22.3938 3.51562 23.8477 3.51562C25.3015 3.51562 26.4844 4.69849 26.4844 6.15234C26.4844 7.6062 25.3015 8.78906 23.8477 8.78906Z" fill="white"/>
			<path d="M23.8477 5.27344C23.3627 5.27344 22.9688 5.66734 22.9688 6.15234C22.9688 6.63734 23.3627 7.03125 23.8477 7.03125C24.3327 7.03125 24.7266 6.63734 24.7266 6.15234C24.7266 5.66734 24.3327 5.27344 23.8477 5.27344Z" fill="white"/>
			<path d="M15.0586 8.78906C11.6666 8.78906 8.90625 11.5494 8.90625 14.9414C8.90625 18.3334 11.6666 21.0938 15.0586 21.0938C18.4506 21.0938 21.2109 18.3334 21.2109 14.9414C21.2109 11.5494 18.4506 8.78906 15.0586 8.78906Z" fill="white"/>
		</svg>
	</v-btn>
		</a>
	<v-btn
	class="icons"
	dark
	icon
	>
	<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z" fill="white"/>
	</svg>
</v-btn>
</v-flex>
<v-flex xs12>
	<v-card-actions dark class="footer-action dark justify-start">
		<p style="font-size: 18px; font-weight: 500;">&copy; 2017 «Jeeves». Все права защищены</p>
		<div>
			<p style="font-size: 14px;">Условия использования</p>
			<p style="font-size: 14px;">Политика конфиденциальности</p>
		</div>
	</v-card-actions>
</v-flex>
</v-layout>
</div>
</v-card>

</v-footer>
</template>
<script>
// import Logo from '~/components/layouts/Logo.vue'

  export default {
  	components: {
      // Logo,
  },
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      logo: require('../static/logos/footer.svg')
    }),
  }
</script>
<style>
.v-footer{
	position: relative;
}
	.size{
		height:auto;
		max-height:20vh;
		padding-left: 0 !important;
	}
	.theme--dark.v-sheet {
	    background-color: #000;
	    border-color: #000;
	}
	.footer-action {
		font-weight: 300;
		display: flex !important;
		-webkit-justify-content: space-between !important;
		justify-content: space-between !important;
	    background: #000;
	}
	.footer-action > div {
		display: flex;
	}
	.footer-action > div > p:first-child {
		margin-right: 20px;
	}
	.sas > p {
		/*margin-right: 20px;*/
		cursor: pointer;
	}
	.subheading {
		align-self: flex-start;
	}
	.subheading > ul {
		font-weight: 300;
		list-style: none;
		font-size: 20px;
		margin-left: 30px;
		cursor: pointer;
	}
</style>

<style scoped>
	.v-card__title {
	        padding: 16px 1rem 4rem 0;
	}
	.icons {
		
	}
@media screen and (max-width: 900px){
	.v-card__actions{
		margin: 50px 0 0;
	}
	.sas {
	    font-size: smaller;
	}
	.footer-action > p {
	    font-size: xx-small;
	    text-align: center;
	}
}
</style>