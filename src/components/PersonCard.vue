<template>

  <div>
    <v-divider
      v-if="index"
    ></v-divider>

    <v-list-tile
      avatar
      @click="click(data.id)"
    >
      <v-list-tile-avatar v-if="data.avatar">
        <img :src="data.avatar">
      </v-list-tile-avatar>
      <v-list-tile-avatar v-if="!data.avatar">
        <img src="@/assets/default_avatar.png">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>
          {{data.name}}
        </v-list-tile-title>
        <v-list-tile-sub-title>
          {{data.phoneNumber}}
        </v-list-tile-sub-title>
      </v-list-tile-content>

    </v-list-tile>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { PersonDTO } from '@/types';

@Component
export default class PersonCard extends Vue {

  @Prop({default: 0})
  private index?: number;

  @Prop()
  private data?: PersonDTO;

  @Emit('onClick')
  private click(id: number) {}

}
</script>