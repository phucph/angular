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
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor(private  config: ConfigService) {}
  ngOnInit() {
    // console.log( this.getParam());
    this.getHeader();
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  getParam() {
    return this.text;
  }
  getHeader() {
    return this.config.getConfig().product;
  }
  getActiveTab(tabname: string) {
    this.activetab = tabname;
    this.text = tabname;
    this.buttonClicked.emit(this.text);

  }

}
