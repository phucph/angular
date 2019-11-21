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
    this.text = event;
    console.log(this.text);
  }
  ngOnInit() {
    this.product.furniture = this.getProductFurniture();
    this.product.decorative = this.getProductDecorative();
    this.product.lighting = this.getProductLighting();
    this.product.outdoor = this.getProductOutdoor();
    this.product.storage = this.getProductStorage();
  }
  getProductFurniture() {
      return this.config.getConfig().product.furniture;
  }
  getProductDecorative() {
    return this.config.getConfig().product.decorative;
  }
  getProductLighting() {
    return this.config.getConfig().product.lighting;
  }
  getProductOutdoor() {
    return this.config.getConfig().product.outdoor;
  }
  getProductStorage() {
    return this.config.getConfig().product.storage;
  }

}
