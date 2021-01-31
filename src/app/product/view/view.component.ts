import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id: number;
  product: Product;

  constructor(
    public productService: AppService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];

    this.productService.find(this.id).subscribe((data: Product)=>{
      this.product = data;
    });
  }

}
