<template>

  <PhoneBookList :data="items"/>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PhoneBookList } from '@/components';

@Component({
  components: {
    PhoneBookList,
  }
})
export default class PhoneBookView extends Vue {
  private data() {
    return {
      items: [
        {
          id: 1,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: '김정훈',
          phoneNumber: '010-3198-2036'
        },
        {
          id: 2,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: '권혁준',
          phoneNumber: '010-1234-5678'
        },
        {
          id: 3,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name: '홍혜린',
          phoneNumber: '010-1234-1234'
        },
        {
          id: 4,
          name: '박수석',
          phoneNumber: '010-5678-1234'
        }
      ]
    };
  }
}
</script>
