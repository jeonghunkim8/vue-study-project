<template>

  <PhoneBookList :data="peopleList"/>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PhoneBookList } from '@/components';
import { namespace, State, Action, Getter } from 'vuex-class';
import { PersonDTO } from '@/types';

const PersonStoreModule = namespace('PersonStore');

@Component({
  components: {
    PhoneBookList,
  }
})
export default class PhoneBookView extends Vue {

  @PersonStoreModule.State('peopleList')
  private peopleList!: PersonDTO[];

  @PersonStoreModule.Action('requestGetPeopleList')
  private requestGetPeopleList!: () => Promise<void>;

  private mounted() {
    this.requestGetPeopleList();
  }
}
</script>
