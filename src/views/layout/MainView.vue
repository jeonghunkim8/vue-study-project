<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" fixed app>
      <Menu :menu="menu"/>
    </v-navigation-drawer>

    <v-toolbar color="purple" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Menu } from '@/components';

@Component({
  components: {
    Menu
  },
  data: () => ({
    menu: [{
      icon: 'home',
      name: 'Home',
      href: '/home',
    },
    {
      icon: 'contact_phone',
      name: 'PhoneBook',
      href: '/phoneBook',
    }]
  })
})
export default class MainView extends Vue {

  private drawer: boolean = false;

}
</script>