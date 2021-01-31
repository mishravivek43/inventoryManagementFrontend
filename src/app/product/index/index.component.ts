import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  products: Product[] = [];

  constructor(public productService: AppService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })
  }

  deleteProduct(id){
    this.productService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.id !== id);
         console.log('Product deleted successfully!');
    })
  }

}
