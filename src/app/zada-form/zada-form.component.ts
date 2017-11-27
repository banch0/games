import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zada-form',
  templateUrl: './zada-form.component.html',
  styleUrls: ['./zada-form.component.scss']
})
export class ZadaFormComponent implements OnInit {

  title:string = '';
  @Output() add = new EventEmitter();

  onSubmit(){
    this.add.emit(this.title);
   }

  constructor() { }

  ngOnInit() {
  }

}
