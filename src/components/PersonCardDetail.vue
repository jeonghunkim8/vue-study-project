<template>
  <v-card class="person-card">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{person.id}}. {{person.name}}</div>
        <span>{{person.jd}}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat dark @click="back" class="back-btn">
        <v-icon v-text="'keyboard_arrow_left'"/>
        Back
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { PersonDTO } from '@/types';

@Component
export default class PersonCardDetail extends Vue {
  
  @Prop()
  private person?: PersonDTO;

  @Emit('onBack')
  private back() {}
  
}
</script>

<style lang="scss" scoped>

.person-card{
  background-color: $BgPurple; 
}

.back-btn{
  background-color: $PurpleGray;
}

</style>
