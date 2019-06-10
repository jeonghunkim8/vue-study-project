<template>
  <div>
    <router-view />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import {PhoneBookService} from '@/service';

@Component
export default class App extends Vue {
  
  // private drawer: boolean = false;

  @Provide()
  private phoneBookService = new PhoneBookService();
  
}
</script>