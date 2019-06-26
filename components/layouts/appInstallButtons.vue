<template>
	<div>
		<div v-if="!isBlack" class="downloads">
			<a href="https://apps.apple.com/ru/app/jeeves-concierge/id1440018985">
	        	<img style="cursor: pointer; margin-right: 12px;  " src="../../static/buttons/Ios.svg" alt="downloads ios">
	        </a>
	        <img src="../../static/buttons/android.svg" alt="downloads android">
		</div>
		<div v-else class="downloads text-c">
			<a href="https://apps.apple.com/ru/app/jeeves-concierge/id1440018985">
				<img style="cursor: pointer; margin-right: 12px;" src="../../static/buttons/Ios.png" alt="downloads ios">
			</a>
	        <img  src="../../static/buttons/android.png" alt="downloads android">
		</div>
      </div>
</template>

<script type="text/javascript">
	export default {
		props:['isBlack']
	}
</script>

<style type="text/css" scoped>
	.downloads > img{
	}
</style>
<style lang="stylus" scoped>
.downloads {
    margin-bottom: 103px;
        text-align: center;
}
@media screen and (max-width: 900px){
  .downloads > img{
    width: 30%;
  }
}
</style>