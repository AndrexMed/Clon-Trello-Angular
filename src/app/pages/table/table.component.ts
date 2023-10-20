import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { DataSourceProducts } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  input = new FormControl("", { nonNullable: true, })

  total = 0

  // products: Products[] = []
  productsDataSource = new DataSourceProducts()

  columnas: string[] = ["id", "title", "price", "images", "actions"]

  constructor(private productsSvc: ProductsService) { }

  ngOnInit(): void {
    this.productsSvc
      .getProducts()
      .subscribe(products => {
        // this.products = products
        this.productsDataSource.init(products)

        // this.total = products.map(item => item.price).reduce((price, total) => price + total,0)
        this.total = this.productsDataSource.getTotal()
      })

      this.input.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        console.log(value)
        this.productsDataSource.find(value)
      })
  }

  update(product: Products) {
    this.productsDataSource.update(product.id, {price: 20})
  }

}
