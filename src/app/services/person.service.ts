import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IPersonModel } from '../models/person.model';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    const route = 'https://randomuser.me/api/?results=5';

    const response = this.http.get(route);

    return response;
  }
}
