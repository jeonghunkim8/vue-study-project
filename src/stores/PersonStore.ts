import axios from 'axios';
import { PersonDTO } from '@/types';
import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import {Logger} from '@/utils';

@Module({namespaced: true})
export default class PersonStore extends VuexModule {
  
  public peopleList: PersonDTO[] = [];
  public person: PersonDTO | {} = {};


  @Action({commit: 'setPeopleList'})
  public async requestGetPeopleList() {
    const resp = await axios.get('http://localhost:8081/people');
    Logger.debug(resp);
    if (resp.status === 200) {
      return resp.data;
    }
  }

  @Mutation
  public setPeopleList(peopleList: PersonDTO[]) {
    this.peopleList = peopleList;
  }

  @MutationAction({mutate: ['person']})
  public async requestGetPerson(id: number) {
    const resp = await axios.get(`http://localhost:8081/people/${id}`);
    Logger.debug(resp);
    if (resp.status === 200) {
      return {
        person: resp.data,
      };
    } else {
      return {
        person: {},
      };
    }
  }

}
