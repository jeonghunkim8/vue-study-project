import axios from 'axios';
import { PersonDTO } from '@/types';

export default class PhoneBookService {

  private _foo: string = 'foo!';

  get foo(): string {
    return this._foo;
  }

  public async getPhoneBookList() {
    const resp = await axios.get('http://localhost:8081/people');
    console.log(resp);
    if (resp.status === 200) {
      return resp.data;
    }
    return [];
  }

  public async getPerson(id: number) {
    const resp = await axios.get(`http://localhost:8081/people/${id}`);
    console.log(resp);
    return resp.data;
  }

}
