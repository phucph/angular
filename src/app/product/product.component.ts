import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {
    buttonlink: undefined,
    furniture: undefined,
  };
  constructor(private config: ConfigService) { }
  ngOnInit() {
    this.product.furniture = this.getProduct();
  }
  getProduct() {
    return this.config.getConfig().product.furniture;
  }

}
