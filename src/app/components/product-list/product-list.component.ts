import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
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
}
