import axios from 'axios';
import { PersonDTO } from '@/types';
import { ActionContext, Module } from 'vuex';



interface IPersonStore {
  peopleList: PersonDTO[];
  person: PersonDTO | {};
}

const state: IPersonStore = {
  peopleList: [],
  person: {}
};

const PersonStore: Module<IPersonStore, {}> = {
  namespaced: true,
  state,
  mutations: {
    setPeopleList: (state: IPersonStore, peopleList: PersonDTO[]) => {
      state.peopleList = peopleList;
    },
    setPerson: (state: IPersonStore, person: PersonDTO) => {
      state.person = person;
    }
  },
  actions: {
    requestGetPeopleList: async (context: ActionContext<IPersonStore, {}>) => {
      const resp = await axios.get('http://localhost:8081/people');
      if (resp.status === 200) {
        context.commit('setPeopleList', resp.data);
      }
    },
    requestGetPerson: async (context: ActionContext<IPersonStore, {}>, id: number) => {
      const resp = await axios.get(`http://localhost:8081/people/${id}`);
      if (resp.status === 200) {
        context.commit('setPerson', resp.data);
      }
    }
  },
};

export default PersonStore;
