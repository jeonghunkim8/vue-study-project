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

@Component({
  components: {
    PersonCardDetail, 
  }
})
export default class PhoneBookDetailView extends Vue {
  
  private person: PersonDTO | {} = {};

  //mounted
  private mounted() {
    const { id } = this.$router.currentRoute.params;

    this.person = {
      id: Number(id),
      name: '김정훈',
      phoneNumber: '010-3198-2036',
      jd: 'Logistics Platform Developer',
    };
  }
}
</script>
