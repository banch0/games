import { Injectable } from '@angular/core';
import { zadacha } from './shared/data';
import { Zada } from './shared/zada';

@Injectable()
export class ZadachService {

  zadacha: Zada [] = zadacha;

  getZadacha():Zada[] {
       return this.zadacha;
  }

  constructor() { }

}
