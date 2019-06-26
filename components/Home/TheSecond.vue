<template>
			<v-layout row wrap>
	<v-img class="second-block" position="45% center" cover style="justify-content: center; width: 100vw; min-height: 396px;" :lazy-src="bg" :src="bg">
				<div class="hidden-md-and-up">
				<v-flex px-2 mx-4 md12 offset-xs-1 xs10>
					<v-flex pr-5 xs12 md5>
						<h1 class="second-title">Наши водители — профессионалы, соблюдающие этикет и корпоративные стандарты в выполнении своих обязанностей, в поведении и внешнем виде.</h1>
					</v-flex>
					<v-flex pr-5 xs10 md5>
						<h1 class="second-title">Проходят тщательный отбор в соответствии со строгими критериями, носят классический костюм и галстук, владеют иностранными языками подождут в аэропорту с табличкой, откроют для Вас дверь, помогут с багажом, в случае дождя встретят с зонтом, учтут Ваши пожелания по маршруту, музыке и температуре. </h1>
					</v-flex>
				</v-flex>
			</div>
			<div class="static hidden-sm-and-down">
				<v-flex px-2 mx-4 md12 offset-xs-1 xs10>
					<v-flex pr-5 xs12 md5>
						<h1 class="second-title">Наши водители — профессионалы, соблюдающие этикет и корпоративные стандарты в выполнении своих обязанностей, в поведении и внешнем виде.</h1>
					</v-flex>
					<v-flex pr-5 xs10 md5>
						<h1 class="second-title">Проходят тщательный отбор в соответствии со строгими критериями, носят классический костюм и галстук, владеют иностранными языками подождут в аэропорту с табличкой, откроют для Вас дверь, помогут с багажом, в случае дождя встретят с зонтом, учтут Ваши пожелания по маршруту, музыке и температуре. </h1>
					</v-flex>
				</v-flex>
			</div>
	</v-img>
			</v-layout>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				bg: require('../../static/Home/Second.png')
			}
		}
	}
</script>
<style lang="stylus" scoped>
.container 
	background-size cover
	margin 0
	width 100vw !important
	padding 0 5vw
	height auto
// .flex
// 	    margin 3vw 0
</style>
<style scoped>
.second-title{
	color: white;
    font-size: 21px; 
	margin: 10px auto;
	font-weight: 500;
	font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
text-align: justify;
}
.second-list{
	margin: 10px 10px 10px 0px;
	font-weight: 500;
}
.second-list > li{
	color: white;
	font-size: 16px;
	margin: 10px auto;
}

@media screen and (max-width: 900px){
	.container {
		background-image: none;
	}
	.second-title{
		font-size: 18px;
	}
	.second-list > ul > li {
		font-size: 16px !important;
	}
	
}
</style>
<style type="text/css">
.second-block .v-responsive__content {
	align-self: center !important;
	display: flex;
    justify-content: center;
}

</style>
<style type="text/css">
.v-responsive.v-image.second-block .v-image__image.v-image__image--cover {
  /*transform: translate(3%, 0px) !important;*/
}
</style>