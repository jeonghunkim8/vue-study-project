<template>
  <v-list two-line>
    <template v-for="(item, index) in data">

      <v-divider
        v-if="index"
        :key="index"
      ></v-divider>

      <PersonCard 
        :key="'_'+item.id"
        :id="item.id"
        :avatar="item.avatar"
        :name="item.name"
        :phoneNumber="item.phoneNumber"
      />
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PersonCard } from '@/components';
import { PersonDTO } from '@/types';

@Component({
  components: {
    PersonCard,
  }
})
export default class PhoneBookList extends Vue {

  @Prop({default: []})
  private data?: PersonDTO[];
}
</script>