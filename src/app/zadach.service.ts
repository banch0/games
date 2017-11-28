import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Zada } from './shared/zada';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ZadachService {
  private apiUrl = 'api/zadacha';
  

  getZadacha(): Observable<Zada[]> {
       return this.http.get(this.apiUrl)
                        .map(res => res.json().data as Zada[])
                        .catch(this.handlerError);
  }
  createZadach(title: string){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let zadach = new Zada(title);

    return this.http.post(this.apiUrl, zadach, options)
              .map(res => res.json().data as Zada)
              .catch(this.handlerError);    
  }
  deleteZadach(zadacha: Zada){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let url = `${this.apiUrl}/${zadacha.id}`;

    return this.http.delete(url, options)
             .catch(this.handlerError);
  }
  toggleZadach(zadacha: Zada){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let url = `${this.apiUrl}/${zadacha.id}`;

    return this.http.put(url, zadacha, options)
             .catch(this.handlerError);
  }
  
  private handlerError(error: any ){
    console.error('ERROR', error);
    return Observable.throw(error.message || error);
  }

  constructor(private http: Http) { }

}
