import { Component, OnInit} from '@angular/core';
import {Zada } from '../shared/zada';
import { ZadachService } from '../zadach.service'



@Component({
  selector: 'app-zada-list',
  templateUrl: './zada-list.component.html',
  styleUrls: ['./zada-list.component.scss']
})
export class ZadaListComponent implements OnInit {

  zadacha: Zada[];

  constructor(private zadachService: ZadachService) {
    this.zadacha = [];
   }

  toggle(zada:Zada){
    this.zadachService.toggleZadach(zada)
  }
  delete(zada:Zada){
    this.zadachService.deleteZadach(zada);
  }

  ngOnInit() {
    this.zadachService.getZadacha().then(zadacha => this.zadacha = zadacha);
  }

}
