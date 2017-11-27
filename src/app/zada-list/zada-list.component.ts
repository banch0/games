import { Component, OnInit, Input } from '@angular/core';
import {Zada } from '../shared/zada';
import { ZadachService } from '../zadach.service'


@Component({
  selector: 'app-zada-list',
  templateUrl: './zada-list.component.html',
  styleUrls: ['./zada-list.component.scss']
})
export class ZadaListComponent implements OnInit {

  @Input() zadacha: Zada[];

  toggle(zada:Zada){
    zada.completed =!zada.completed;
  }
  delete(zada:Zada){
    let index = this.zadacha.indexOf(zada);

    if(index > -1){
      this.zadacha.splice(index, 1)
    }
  }

  constructor(private zadachService: ZadachService) {
    this.zadacha = [];
   }

  ngOnInit() {
  }

}
