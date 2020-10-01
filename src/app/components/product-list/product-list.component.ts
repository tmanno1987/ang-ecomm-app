import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'product-list-data',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private ps: ProductServiceService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.ps.getProductList().subscribe(data => {this.products=data;})
  }

  sortStuff(prod: Product[], flag: boolean): Product[] {
    if (flag) {
      // sort forward
      return prod.sort((a, b) => a.unitPrice - b.unitPrice);
    } else {
      // sort reverse
      return prod.sort((a, b) => b.unitPrice - a.unitPrice);
    }
  }

  highToLow() {
    this.products = this.sortStuff(this.products, false);
  }

  lowToHigh() {
    this.products = this.sortStuff(this.products, true);
  }
}
