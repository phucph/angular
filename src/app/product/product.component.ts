import { Component, OnInit, Input } from '@angular/core';
import {ConfigService} from '../config.service';
import {consoleTestResultHandler} from 'tslint/lib/test';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() text: string ;
  product = {
    buttonlink: undefined,
    furniture: undefined,
    outdoor: undefined,
    lighting: undefined,
    decorative: undefined,
    storage: undefined
  };
  constructor(private config: ConfigService) {}
  OnbuttonClick(event: string) {
    console.log(event);
    this.text = event;
  }
  ngOnInit() {

    this.product.furniture = this.getProduct();
  }
  getProduct() {
      return this.config.getConfig().product.furniture;
  }

}
