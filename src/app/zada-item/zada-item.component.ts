import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Zada } from '../shared/zada';

@Component({
  selector: 'app-zada-item',
  templateUrl: './zada-item.component.html',
  styleUrls: ['./zada-item.component.scss']
})
export class ZadaItemComponent implements OnInit {
  @Input() zada: Zada;
  @Output() delete = new EventEmitter();

  toggle(){
    this.zada.completed = !this.zada.completed;
  }
  onDelete(){
    this.delete.emit(this.zada);
  }

  constructor() { }

  ngOnInit() {
  }

}
