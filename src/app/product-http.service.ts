import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';
import {Observable} from 'rxjs';
import {Product} from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  url = env.backendApiUrl + 'products';

  constructor(private http: HttpClient) { }

  async findAll(): Promise<Product[]> {
    return this.http.get<Product[]>(this.url).toPromise();
  }

  async add(p: Product): Promise<Product> {
    return this.http.post<Product>(this.url, p).toPromise();
  }
  async findOne(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.url}/${id}`).toPromise();
  }

  async delete(id: number): Promise<void> {
    return this.http.delete<void>(`${this.url}/${id}`).toPromise();
  }
  //findOne(id: number)
  //delete(product: Product)
  //update(product: Product)


}
