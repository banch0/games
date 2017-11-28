import { Component, OnInit } from '@angular/core';

import { Zada } from '../shared/zada';
import { ZadachService } from '../zadach.service';


@Component({
  selector: 'app-zadachi',
  templateUrl: './zadachi.component.html',
  styleUrls: ['./zadachi.component.scss']
})
export class ZadachiComponent implements OnInit {
  zadacha: Zada[];

constructor(private zadachService: ZadachService) {
    this.zadacha = [];
   }

  ngOnInit() {
    this.zadachService.getZadacha().subscribe(zadacha => this.zadacha = zadacha);
  }
  toggle(zada:Zada){
    this.zadachService.toggleZadach(zada).subscribe(
      res => {
        zada.completed = !zada.completed;
       });
  }
  delete(zada:Zada){
    this.zadachService.deleteZadach(zada).subscribe(
      res => {
        let index = this.zadacha.indexOf(zada);
        
            if(index > -1){
              this.zadacha.splice(index, 1)
            }
  });

}
create(title: string){
  this.zadachService.createZadach(title).subscribe(zadacha => this.zadacha.push(zadacha))
}



  

  

  

  

}
