import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit{

  products: Products[] = []

  constructor (private productSvc: ProductsService) {}

  ngOnInit(): void {
    this.productSvc
    .getProducts()
    .subscribe(products => {
      this.products = products
    })
  }

}
