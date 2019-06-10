import axios from 'axios';
import { PersonDTO } from '@/types';
import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';

@Module({namespaced: true})
export default class PersonStore extends VuexModule {
  
  public peopleList: PersonDTO[] = [];
  public person: PersonDTO | {} = {};


  @MutationAction({mutate: ['peopleList']})
  public async requestGetPeopleList() {
    const resp = await axios.get('http://localhost:8081/people');
    if (resp.status === 200) {
      return {
        peopleList: resp.data,
      };
    } else {
      return {
        peopleList: [],
      };
    }
  }

  @MutationAction({mutate: ['person']})
  public async requestGetPerson(id: number) {
    const resp = await axios.get(`http://localhost:8081/people/${id}`);
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
