<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="purple">
      <v-toolbar-title>Kurly Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="id" label="id" type="text" v-model="username"></v-text-field>
        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn dark color="purple" @click="() => handleLogin(username, password)">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Loginform extends Vue {

  private username: string = '';
  private password: string = '';

  @Emit('onSubmit')
  private handleLogin(username: string, password: string) {}

}
</script>