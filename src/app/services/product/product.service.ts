import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from 'src/app/models/Product';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private htpp: HttpClient
  ) { }

  getAll(): Observable<IProduct[]> {
    return this.htpp.get<IProduct[]>('products');
  }
}
