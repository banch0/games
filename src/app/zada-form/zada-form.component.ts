import { Component, OnInit } from '@angular/core';
import { ZadachService } from '../zadach.service'

@Component({
  selector: 'app-zada-form',
  templateUrl: './zada-form.component.html',
  styleUrls: ['./zada-form.component.scss']
})
export class ZadaFormComponent implements OnInit {

  title:string = '';


  onSubmit(){
    this.zadachService.createZadach(this.title);
   }

  constructor(private zadachService: ZadachService) { }

  ngOnInit() {
  }

}
