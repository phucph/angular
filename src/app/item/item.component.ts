import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { ConfigService} from '../config.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private  route: ActivatedRoute, private config: ConfigService, private location: Location) { }
  product = {
    furniture: undefined
  };
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product.furniture = this.getProductById(id);
  }
  getProductById(id: number) {
  return this.config.getProductById(id);
  }
  getBack() {
    this.location.back();
  }
}
