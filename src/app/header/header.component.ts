import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activetab = 'home';
  header = {};
  constructor(private  config: ConfigService) { }

  ngOnInit() {
    this.getHeader();
  }
  getHeader() {
    return this.config.getConfig().header;
  }
  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }
}
