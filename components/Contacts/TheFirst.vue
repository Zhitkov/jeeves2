<template>
  <v-layout style="justify-content: center;" class="full-screen contact" row wrap>
    <v-flex xs12>
      
      <v-img class="parallax-screen change" style="align-self: flex-end;" dark :lazy-src="bg" cover :src="bg">
        <div style="display: flex; justify-content: flex-start;" class="static">
        <v-flex md3>
          <v-img style="padding-bottom: 69px;" :src="logo" contain></v-img>
        </v-flex>
        </div>
    </v-img>
    </v-flex>
  <v-layout class="static" row wrap>
      <v-flex pl-5 md12 xs10>
        <p style="font-size: 36px; margin: 50px auto 30px auto" class="neue">Контактная информация</p>
      </v-flex>
    <v-flex px-5 md4 xs10 style="padding-bottom: 20px"> 
      <v-flex xs12 class='contact-container'>
        <div class="vector">
        <v-img style="width: 21px; height: 21px;" :src="i1" contain></v-img>
      </div>
        <p class="thin contacts">8 800 550 39 34</p>
      </v-flex>
      <v-flex xs12 class='contact-container'>
        <div class="vector">
        <v-img style="width: 18px; height: 18px;" :src="i2" cover></v-img>
      </div>

        <p class="thin contacts">E-mail: info@slv24.ru</p>
      </v-flex>
      <v-flex xs12 class='contact-container'>
        <div class="vector">
        <v-img style="width: 14px; height: 18px;" :src="i3" contain></v-img>
        </div>
        <p style="line-height: 25px;" class="thin contacts">Главный офис  <span class='blue-text'>JEEVES</span>
  Ул. Заозерная, д. 8, кор. 2 Санкт-Петербург, 196084</p>
      </v-flex>
    </v-flex>
      <v-flex offset-md1 offset-xs1 md2 xs5 class='blue-text' style="padding-left: 60px;">
        <p class="thin contacts">Клиентам:</p>
        <p class="thin contacts">Партнерам:</p>
        <p class="thin contacts">Маркетинг:</p>
      </v-flex>
      <v-flex md4 xs4>
        <p class="thin contacts">hello@jeeves24.ru</p>
        <p class="thin contacts">partners@jeeves24.ru</p>
        <p class="thin contacts">oko@jeeves24.ru</p>
      </v-flex>
<v-flex pl-5 xs10>
  
      <v-dialog
      v-model="dialog"
      width="500"
    >
        
        <p slot="activator" class="black-underline thin">Оставить отзыв о работе мобильного приложения.</p>
        <p slot="activator" class="black-underline thin">Оставить отзыв об уровне нашего сервиса.</p>

      <v-card>
        <v-card-title
          class="headline lighten-2"
          primary-title
          style="display: flex; justify-content: center;"
        >
          <span class="neue" style="font-size: 38px !important;">Отзыв</span>
           <v-icon @click="dialog = false" class="clear">clear</v-icon>
           <b style="font-size: 20px; text-align: center;">Благодарим за оставленный отзыв, Ваше мнение очень ценно для нас.</b>
        </v-card-title>

        <v-card-text>
            <v-flex xs12 >
              <v-text-field
              class="form-white"
              label="Как к Вам обращаться?"
              outline
              ></v-text-field>
          </v-flex>
            <v-flex xs12 >
              <v-text-field
              class="form-white"
              label="Обратная связь"
              outline
              ></v-text-field>
          </v-flex>
            <v-flex xs12 >
              <v-textarea
          outline
          label="Текст"
        ></v-textarea>
          </v-flex>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
      <v-dialog
              v-model="dialog2"
              width="500"
              >
          <v-btn
            color="primary"
            @click="dialog = false"
            slot="activator"
          >
            Отправить
          </v-btn>




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
            @click="dialog2 = false"
            slot="activator"
          >
            Завершить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>




        </v-card-actions>
      </v-card>
    </v-dialog>
</v-flex>



  </v-layout>
  </v-layout>
</template>

<script>

  export default {
    components: {

    },
    data () {
      return {
        logo: require('../../static/logos/logo2.svg'),
        bg: require('../../static/Contacts/bg.png'),
        dialog: false,
        dialog2: false,
        on: true,
        i1: require('../../static/Contacts/icons/i1.svg'),
        i2: require('../../static/Contacts/icons/i2.svg'),
        i3: require('../../static/Contacts/icons/i3.svg')

      }
    },
  }
</script>

<style lang="stylus" scoped>
.padl5{
  padding-left: 5vw;
}
.clear
  position absolute 
  right 10px
  top 10px
.blue-text 
  color: #136CE2;
  p 
    color: #136CE2;
  // border-bottom #136CE2 solid 1px
.black-underline
  color #000
  text-decoration: underline;
  display: inline-flex;
  margin-bottom 5px
  display: block;
  &:first-child
    margin-top: 30px
  &:last-child
    margin-bottom: 50px
.contact-container
  display flex
  align-items center
  padding 6px
  .vector
    display flex
    align-self end
    justify-self center
    width 20px
    svg
      align-self end
      margin-top 5px
.contacts
  margin-left: 10px;
  margin-bottom: 0
.thin
  font-weight 100 
  font-size 21px
.full-screen
  width 100vw
.parallax-screen
  width 100vw
  height 57vh !important
.container
  align-content: center
  align-items: center
  align-self: center
  display: flex
</style>
<style scoped>
.v-card__actions{
    display: grid;
    justify-items: center;
}
@media screen and (max-width: 900px){
  .First-text{
    font-size: 20px; 
    margin: 5% 10% 1%;
  }
  .parallax-screen{
    height: 100vh !important;
  }
}
</style>
<style>
/*.contact .v-image__image{
  box-shadow: inset 10px -30px 150px 30px #000 !important;
}*/
</style>


