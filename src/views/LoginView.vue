<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <LoginForm @onSubmit="handleLogin"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Logger } from '@/utils';
import { LoginRequest } from '@/types';
import { LoginForm } from '@/components';

const AuthStoreModule = namespace('AuthStore');

@Component({
  components: {
    LoginForm,
  }
})
export default class LoginView extends Vue {

  @AuthStoreModule.Action
  private requestAuth!: (loginRequest: LoginRequest) => Promise<void>;

  @AuthStoreModule.Getter
  private hasAuth!: boolean;

  // 로그인 핸들링
  private async handleLogin(username: string, password: string) {
    await this.requestAuth({
      username, password
    });
    if (this.hasAuth) {
      Logger.info('login succeed.');
      this.$router.push({path: '/'});
    }
  }

}
</script>


