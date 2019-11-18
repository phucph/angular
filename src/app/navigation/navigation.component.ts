import {Component, OnChanges, OnInit, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import {ConfigService} from '../config.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges {
  activetab = 'furniture';
  @Input() text: string ;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(private  config: ConfigService) { }
  OnClick() {
    this.buttonClicked.emit();
  }
  ngOnInit() {
    this.getHeader();
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  getHeader() {
    return this.config.getConfig().product;
  }
  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

}
