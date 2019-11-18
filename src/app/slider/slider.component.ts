import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slider: {
    button: any;
    description: any;
    tagline: any;
  };
  constructor(private config: ConfigService) { }
  ngOnInit() {
    this.slider = this.getSlider();
  }
  getSlider() {
    return this.config.getConfig().slider;
  }
}
