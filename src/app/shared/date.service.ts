import {InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const zadacha = [
      {
        id: 1,
        title:'Hello World!',
        completed: true
      },
      {
        id:2,
        title:'Hello World!',
        completed: false
      },
      {
        id:3,
        title:'Hello World!',
        completed: false
      },
      {
        id:4,
        title:'Hello World!',
        completed: false
      }
    ];
    return {zadacha};
  }
}