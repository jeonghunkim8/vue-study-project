<template>
  <v-list-tile
    :key="id"
    avatar
    @click="() => {}"
  >
    <v-list-tile-avatar>
      <img :src="avatar">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>
        {{name}}
      </v-list-tile-title>
      <v-list-tile-sub-title>
        {{phoneNumber}}
      </v-list-tile-sub-title>
    </v-list-tile-content>

  </v-list-tile>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PersonCard extends Vue {

  @Prop()
  private id?: number;

  @Prop()
  private avatar?: string;

  @Prop()
  private name?: string;

  @Prop()
  private phoneNumber?: number;

}
</script>