<template>
  
  <v-list dense>
    <v-list-tile v-for="(item, index) in menu" :key="index" @click="() => {goView(item.href)}">
      <v-list-tile-action>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{item.name}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { MenuDTO } from '@/types';

@Component
export default class Menu extends Vue {

  @Prop({default: []})
  private menu?: MenuDTO[];

  private goView(path: string) {
    this.$router.push({
      path
    });
  }

}
</script>
