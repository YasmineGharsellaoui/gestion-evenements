import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   
    let events = [
      {  id:  1,  name:  "camping", date: "01/01/2021", description:'aaaaaaaaa' },
      {  id:  2,  name:  "WaterEvent", date: "02/01/2021", description:'aaaaaaaaa' },
      {  id: 3,  name:  "Athlète", date: "03/01/2021", description:'aaaaaaaaa' }
    ];

  

   return {events}

  }
}
