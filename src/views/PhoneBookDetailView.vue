<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          
          <PersonCardDetail :person="person" @onBack="() => {$router.back()}"/>

        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PersonCardDetail } from '@/components';
import { PersonDTO } from '@/types';
import { namespace, State, Action, Getter } from 'vuex-class';

const PersonStoreModule = namespace('PersonStore');

@Component({
  components: {
    PersonCardDetail, 
  }
})
export default class PhoneBookDetailView extends Vue {
  
  @PersonStoreModule.State
  private person?: PersonDTO;

  @PersonStoreModule.Action
  private requestGetPerson!: (id: number) => Promise<void>;

  //mounted
  private async mounted() {
    const { id } = this.$router.currentRoute.params;

    this.requestGetPerson(Number(id));
  }
}
</script>
