<template>
  <v-container mx-0 py-0 style=" min-width: 100%;">
    <v-layout style="display: flex; justify-content: center;" row wrap>
      <div class="static">
      <v-flex xs12>
        <v-tabs
        v-model="active"
        color="#00000000"
        dark
        slider-color="#136CE2"
        class="hidden-sm-and-down"
        >
        <!-- <v-spacer></v-spacer> -->
        <v-flex px-2 mx-4 justify-center class="v-tabs__div nav-info text-lowercase" xs1>
          <a  class="nav-link" href="tel:+78005503934">8 800 550 39 34</a>
        </v-flex>
        <v-flex pl-3 style="justify-content: flex-start;" class="v-tabs__div nav-info text-lowercase" xs1>
          <a class="nav-link" href="mailto:info@jeeves24.ru">info@jeeves24.ru</a>
        </v-flex>
        <v-flex style="justify-content: flex-end;" class="v-tabs__div text-lowercase" offset-xs3 xs7>
          <nuxt-link
          class="nav-links"
          :id="nav.link"
          v-for="nav in navLinks"
          :key="n"
          :to="nav.link">
          <v-tab ripple class="text-capitalize"> {{ nav.name }} </v-tab>
        </nuxt-link>
        <v-tab-item
        v-for="n in 7"
        :key="n"
        >
      </v-tab-item> 
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-tab v-on="on" ripple class="text-capitalize"> {{ currentLang }} <v-icon>expand_more</v-icon> </v-tab>
        </template> 
        <v-list dark>
          <v-list-tile
          v-for="lang in langs"
          @click=""
          >
          <v-list-tile-title ripple class="text-capitalize">{{ lang.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-flex>
        <!-- <v-spacer></v-spacer> -->

</v-tabs>
</v-flex>
</div>


</v-layout>

<v-layout row wrap>
<v-flex xs12>
  <v-card dark class="hidden-md-and-up" flat width="100vw">
    <v-card-title class="mobile-nav white--text">
      <div class="nav-info">
        <a style="margin-right: 10px;" class="nav-link" href="">
          8 800 550 39 34
        </a>
      </div>
      <div class="nav-info text-lowercase">
        <a class="nav-link" href="">
          info@slv24.ru
        </a>
      </div>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
          dark
          icon
          v-on="on"
          >
          <v-icon>menu</v-icon>
        </v-btn>
      </template>
      <v-list dark>
        <v-list-tile
        v-for="nav in navLinks"
        :to="nav.link"
        @click=""
        >
        <v-list-tile-title ripple class="text-capitalize">{{ nav.name }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</v-card-title>
</v-card>
</v-flex>
</v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        active: 0,
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
        ],
        on: true,
        navLinks:
        [
          {
            name: 'Главная',
            link: '/',
          },
          {
            name: 'Ассистент',
            link: '/assistent',
          },
          {
            name: 'Тарифы',
            link: '/tarifs',
          },
          {
            name: 'Для Бизнеса',
            link: '/buisness',
          },
          {
            name: 'Контакты',
            link: '/contacts',
          },
          {
            name: 'Войти',
            link: '/signin',
          },
        ],
        langs: [
          {
            name: 'RUS',
            link: '/',
          },
          {
            name: 'CHA',
            link: '/',
          },
          {
            name: 'ENG',
            link: '/',
          },
        ],
        currentLang: 'RUS'
      }
    },
    mounted() {

    },
    methods: {
      // next () {
      //   const active = parseInt(this.active)
      //   this.active = (active < 2 ? active + 1 : 0)
      // }

    }
  }
</script>

<style lang="stylus" scoped>
.container{
  background: #000000a0
}
.flex.v-tabs__div.text-lowercase.offset-xs3.xs5 {
  justify-content: center;
}
.theme--dark.v-list 
  background: #000000a0;
.nav-links
  height 100%
  text-decoration none
  font-size: 14px;
  &:nth-child(4)
    min-width: 110px;
.layout
  background #00000000
.nav-link
  color white
  text-decoration none
.theme--dark.v-sheet
  background none
.nav-info
  justify-content: center;
.nav-info
    margin auto none
    // a 
    //   margin-right:5%
</style>

<style type="text/css">
.static {
  /*display: flex;
  justify-content: center;*/
  width: 1140px !important;
}
.static .flex.xs12 .v-tabs.hidden-sm-and-down .theme--dark.v-tabs__bar{
  background: none !important
}
/*.v-tabs.hidden-sm-and-down[data-v-20ae26d4]  .v-tabs__container{
  justify-content: center;
}*/
</style>

<style scoped>
@media screen and (max-width: 1200px) {
  .v-card__title {
      padding: 16px 1rem;
  }
}

</style>
