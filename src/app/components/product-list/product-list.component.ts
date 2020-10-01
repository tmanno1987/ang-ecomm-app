import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'product-list-data',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currCatId: number;

  constructor(private ps: ProductServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.currCatId = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    //this.listProducts();
  }

  listProducts() {
    if(this.route.snapshot.paramMap.has('id')){
      // has an category ID
      this.currCatId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currCatId = 1;
    }
    this.ps.getProductList(this.currCatId).subscribe(data => {this.products=data;})
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
