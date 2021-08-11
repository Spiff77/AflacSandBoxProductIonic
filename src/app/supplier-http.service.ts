import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';
import {Observable} from 'rxjs';
import {Product} from './model/Product';
import {Supplier} from './model/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierHttpService {

  url = env.backendApiUrl + 'suppliers'

  constructor(private http:HttpClient) { }

  async findAll(): Promise<Supplier[]> {
    return this.http.get<Supplier[]>(this.url).toPromise();
  }

  async add(p: Supplier): Promise<Supplier> {
    return this.http.post<Supplier>(this.url, p).toPromise();
  }
  async findOne(id: number): Promise<Supplier> {
    return this.http.get<Supplier>(`${this.url}/${id}`).toPromise();
  }

  async delete(id: number): Promise<void> {
    return this.http.delete<void>(`${this.url}/${id}`).toPromise();
  }
  //findOne(id: number)
  //delete(product: Product)
  //update(product: Product)


}
