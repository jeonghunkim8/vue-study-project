<template>
  <v-list two-line>
    <template v-for="(item, index) in data">
      <PersonCard 
        :key="index"
        :index="index"
        :data="item"
        @onClick="onPersonCardSelected"
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

  private onPersonCardSelected(id: number) {
    this.$router.push({
      path: `/phoneBook/${id}`,
    });
  }
}
</script>