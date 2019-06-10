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
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { PersonCardDetail } from '@/components';
import { PersonDTO } from '@/types';
import { PhoneBookService } from '../service';

@Component({
  components: {
    PersonCardDetail, 
  }
})
export default class PhoneBookDetailView extends Vue {

  @Inject()
  private phoneBookService!: PhoneBookService;

  private person: PersonDTO | {} = {};

  //mounted
  private async mounted() {

    const id = Number(this.$router.currentRoute.params.id);

    const resp = await this.phoneBookService.getPerson(id);

    this.person = resp;
    
  }
}
</script>
