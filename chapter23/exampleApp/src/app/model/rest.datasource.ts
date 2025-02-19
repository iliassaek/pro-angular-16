import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

export const REST_URL = `http://${location.hostname}:3500/products`;

@Injectable()
export class RestDataSource {
  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(REST_URL);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(REST_URL, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${REST_URL}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${REST_URL}/${id}`);
  }
}
