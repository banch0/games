import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import {MatCardModule} from '@angular/material/card';
import { Zada } from './shared/zada';


import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  color: string;
  myData: Array<any>;
  seconds: number = 25;
  intervalld: any;
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 4, rows: 1, color: '#DDBDF1'}
  ];
  

  
  
  
  constructor(/*private http:Http*/) {
    this.intervalld = setInterval(() => this.tick(), 1000);
    
    // this.http.get('https://jsonplaceholder.typicode.com/photos')
    //   .map(response => response.json())
    //   .subscribe(res => this.myData = res);


      

  }
  private tick(): void {
    if (this.seconds < 1) {
    clearTimeout(this.intervalld);
    // Послать событие по окончании обратного отсчета
    this.complete.emit(null);
    }}
  
  @Output() complete: EventEmitter<any> = new EventEmitter();

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
}
