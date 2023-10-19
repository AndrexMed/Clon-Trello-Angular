import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  total = 0

  products: Products[] = []

  columnas: string[] = ["id", "title", "price", "images"]

  constructor(private productsSvc: ProductsService) { }

  ngOnInit(): void {
    this.productsSvc
      .getProducts()
      .subscribe(products => {
        this.products = products
        this.total = products.map(item => item.price).reduce((price, total) => price + total,0)
      })
  }

}
