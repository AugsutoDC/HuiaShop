import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;

  constructor() {
    this.init();
   }

  ngOnInit(): void {
  }

  getNumberOfStarsChecked(): Number[] {
    return Array(this.product.rating);
  }

  getNumberOfStars(): Number[] {
    return Array(Math.abs(5 - this.product.rating));
  }

  private init(): void {
    this.product = {
      id: null,
      description: "",
      img_url: "",
      price: 0,
      rating: 0,
      title: ""
    }
  }

}
