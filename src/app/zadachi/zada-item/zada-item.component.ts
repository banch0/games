import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Zada } from '../../shared/zada';

@Component({
  selector: 'app-zada-item',
  templateUrl: './zada-item.component.html',
  styleUrls: ['./zada-item.component.scss']
})
export class ZadaItemComponent {
  @Input() zada: Zada;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle(){
    this.toggle.emit(this.zada);
  }
  onDelete(){
    this.delete.emit(this.zada);
  }

}
