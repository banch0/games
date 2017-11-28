import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zada-form',
  templateUrl: './zada-form.component.html',
  styleUrls: ['./zada-form.component.scss']
})
export class ZadaFormComponent {
  title:string = '';
  @Output() create: EventEmitter<string> = new EventEmitter();
  


  onSubmit(){
    this.create.emit(this.title);
   }

  
}
