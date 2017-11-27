import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Zada } from './shared/zada';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ZadachService {
  private apiUrl = 'api/zadacha';
  zadacha: Zada [] = [];

  getZadacha(): Promise<Zada[]> {
       return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().data)
                        .then(zadacha => this.zadacha = zadacha)
                        .catch(this.handlerError);
  }

  createZadach(title: string){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let zadach = new Zada(title);

    this.http.post(this.apiUrl, zadach, options)
              .toPromise()
              .then(res => res.json().data)
              .then(zadach => this.zadacha.push(zadach))
              .catch(this.handlerError); 
      
  }
  deleteZadach(zadacha: Zada){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let url = `${this.apiUrl}/${zadacha.id}`;

    this.http.delete(url, options)
             .toPromise()
             .then(res => {
              let index = this.zadacha.indexOf(zadacha);
              
                  if(index > -1){
                    this.zadacha.splice(index, 1)
                  }
             })
             .catch(this.handlerError);
    
  }
  toggleZadach(zadacha: Zada){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let url = `${this.apiUrl}/${zadacha.id}`;

    this.http.put(url, zadacha, options)
             .toPromise()
             .then(res => {
              zadacha.completed = !zadacha.completed;
             })
             .catch(this.handlerError);
   
  }
  
  private handlerError(error: any ){
    console.error('ERROR', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
