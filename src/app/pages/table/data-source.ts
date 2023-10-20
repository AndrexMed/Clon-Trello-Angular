import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Products } from "src/app/models/products.model";

export class DataSourceProducts extends DataSource<Products> {

    data = new BehaviorSubject<Products[]>([])
    originalData: Products[] = []

    connect(): Observable<Products[]> {
        return this.data
    }

    disconnect() {

    }

    init(products: Products[]) {
        this.originalData = products
        this.data.next(products)
    }

    getTotal() {
        const products = this.data.getValue()

        return products
            .map(item => item.price)
            .reduce((price, total) => price + total, 0)
    }

    update(id: Products["id"], changes: Partial<Products>) {
        const products = this.data.getValue()
        const productIndex = products.findIndex(item => item.id === id)
        if (productIndex !== -1) {
            products[productIndex] = {
                ...products[productIndex],
                ...changes
            }
            this.data.next(products)
        }
    }

    // find(query: string) {
    //     const newProducts = this.originalData.filter(item => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    //     this.data.next(newProducts)
    // }
    find(query: string) {
        const newProducts = this.originalData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
            || item.id == query
            || item.price === Number(query)
        )
        this.data.next(newProducts);
    }
}