<template>
	<div v-if="aboutBuisness" class="phone-form2">
		 <v-select
          :items="items"
          label="+7"
          solo
          background-color="#fff"
          color="gray"
          light
          style="width: 50% !important;"
        ></v-select>
        <v-text-field
        	class='tel-mask'
            label="Телефон"
            single-line
            color="gray"
            solo
            mask="(###) ###-##-##"
            dark
            required
          ></v-text-field>
	</div>
  <div v-else class="phone-form">
     <v-select
          :items="items"
          label="+7"
          solo
          background-color="#333333 !important"
          dark
          style="width: 40% !important;"
        ></v-select>
        <v-text-field
          class='tel-mask'
            label="Телефон"
            single-line
            solo
            mask="(###) ###-##-##"
            dark
            required
          ></v-text-field>
  </div>
</template>

<script>
 export default {
    data: () => ({
      items: ['+7', '+1', '+12'],
    }),
    props:['aboutBuisness']

  }
</script>

<style lang="css" scoped>
	.phone-form, .phone-form2 {
		display: flex;
		-webkit-flex-wrap: nowrap;
		-ms-flex-wrap: nowrap;
		flex-wrap: nowrap;
		-webkit-flex-direction: row;
		    -ms-flex-direction: row;
		        flex-direction: row;
		width:  226px;
		align-content: center;
	}
  .phone-form2 {
    min-width:  50% !important;
  }

</style>
<style >
  .phone-form2 .v-input__slot {
      border-radius: 10px 0 0 10px !important;
      background: #fff !important;
      border: 0.6px solid #1D1919 !important;
  }
  .phone-form2 .tel-mask .v-input__slot {
      border-radius: 0 10px 10px 0 !important;
      background: #fff !important;
  }
</style>

<style lang="stylus">
.v-text-field.v-text-field--solo .v-label {
  color: white !important;
}
.v-text-field.v-text-field--solo .v-label.theme--light {
  color: black !important;
}
.theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea
  color: gray !important
.phone-form .v-input__slot
  min-width 60px
.phone-form .tel-mask .v-input__slot
	background linear-gradient(90deg, #393185 0%, #18F2D9 100%) !important
</style>