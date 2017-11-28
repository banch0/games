import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zada } from '../../shared/zada';

@Component({
  selector: 'app-zada-list',
  templateUrl: './zada-list.component.html',
  styleUrls: ['./zada-list.component.scss']
})

export class ZadaListComponent {
    @Input() zadacha: Zada[];
    @Output() delete: EventEmitter<Zada> = new EventEmitter();
    @Output() toggle: EventEmitter<Zada> = new EventEmitter();

  onDelete(zada:Zada){
   this.delete.emit(zada);
  }
  onToggle(zada:Zada){
   this.toggle.emit(zada);
  }
}