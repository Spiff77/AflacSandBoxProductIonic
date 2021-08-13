import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

   add(user: User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  findAllMail(): Observable<string[]> {
    return this.http.get<{[key: string]: any}[]>(this.url).pipe(
      map( v => v.map( u => u.email))
    );
  }

  findOne(id: string | null): Observable<User> {
      return this.http.get<User>(this.url + '/' + id);
    }
}
/*
Using the following api:
  https://jsonplaceholder.typicode.com/users

  Subscribe to a http call and get only person with id > 5

  Subscribe to a http call and get the first person only

  Subscribe to a http call and get an array of person names.

 */
