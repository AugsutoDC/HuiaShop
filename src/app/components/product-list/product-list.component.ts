import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private _destroyed$ = new Subject();

  products: IProduct[] = [];
  subscriptions: Subscription[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());

    this._destroyed$.next();
    this._destroyed$.complete();
  }

  private getProducts(): void {
    const subscription = this.productService.getAll().subscribe(
      (products) => (this.products = products),
      () => (this.products = [])
    );


    this.subscriptions.push(subscription);
  }
}
