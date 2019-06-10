<template>

  <PhoneBookList :data="items"/>
  
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { PhoneBookList } from '@/components';
import { PhoneBookService } from '../service';
import { PersonDTO } from '../types';

@Component({
  components: {
    PhoneBookList,
  }
})
export default class PhoneBookView extends Vue {

  private items: PersonDTO[] = [];

  @Inject()
  private phoneBookService!: PhoneBookService;

  private async mounted() {
    this.items = await this.phoneBookService.getPhoneBookList();
  }
}
</script>
