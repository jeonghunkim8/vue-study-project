<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" fixed app>
      <Menu :menu="menu"/>
    </v-navigation-drawer>

    <v-toolbar color="purple" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer />
      <v-btn dark color="purple lighten-1" @click="handleLogout">
        <v-icon v-text="'logout'"/> Logout
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Menu } from '@/components';
import { namespace, State, Action, Getter } from 'vuex-class';
import { Logger } from '@/utils';

const AuthStoreModule = namespace('AuthStore');

@Component({
  components: {
    Menu
  }
})
export default class MainView extends Vue {

  private drawer: boolean = false;

  @AuthStoreModule.Getter
  private hasAuth!: boolean;

  @AuthStoreModule.Mutation
  private setLogout!: () => void;

  private data() {
    return {
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
    };
  }

  private mounted() {
    if (!this.hasAuth) {
      this.$router.push({
        path: '/login'
      });
    }
  }

  private handleLogout() {
    this.setLogout();
    this.$router.push({
      path: '/login'
    });
  }

}
</script>