import { Injectable } from '@angular/core';
import { IPersonModel } from '../models/person.model';

@Injectable()
export class PersonService {
  constructor() {}

  getPeople(): Promise<any> {
    const route = 'https://randomuser.me/api/?results=5';

    const response =  fetch(route, {
      method: 'get',
    });
    
    return response;
  }
}
