import { Module, VuexModule, MutationAction, Mutation } from 'vuex-module-decorators';
import axios from 'axios';
import { Logger } from '@/utils';
import { LoginRequest } from '@/types';


@Module({namespaced: true})
export default class AuthStore extends VuexModule {

  public auth: string = '';

  //getter
  get hasAuth(): boolean {
    return this.auth.length > 0;
  }
  
  @MutationAction({mutate: ['auth']})
  public async requestAuth(loginRequest: LoginRequest) {
    const resp = await axios.post('http://localhost:8081/auth', loginRequest);
    Logger.debug(resp);
    if (resp.status === 200) {
      return {
        auth: resp.data
      };
    } else {
      return {
        auth: ''
      };
    }
  }

  @Mutation
  public setLogout() {
    this.auth = '';
  }
  

}
