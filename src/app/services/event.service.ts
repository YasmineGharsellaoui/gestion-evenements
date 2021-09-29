import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

//   SERVER_URL: string = "http://localhost:8080/api/";
  eventURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getEvents(){ 
    return this.httpClient.get<{events:any}>(this.eventURL + '/api/allEvents');
}
public getEventsByName(name:any){ 
   return this.httpClient.post<{events:any}>(this.eventURL + '/api/getEventsByName',name);
}

public getEvent(id :any){
    return this.httpClient.get<{event:any}>(`${this.eventURL + '/api/allEvents'}/${id}`); 
}
public addEvent(event:any, img:File){
   // Creation de formData
   let formData = new FormData();
   // Remplissage de la formData
   formData.append('name',event.name);
   formData.append('date',event.date);
   formData.append('description',event.description);
   formData.append('img',img);

   return this.httpClient.post<{message:string}>(`${this.eventURL + '/api/addEvent'}`, formData)
}

public deleteEvent(id){
   return this.httpClient.delete<{message:string}>(`${this.eventURL + '/api/deleteEvent'}/${id}`)
}
public updateEvent(event:any){
   return this.httpClient.put<{message:string}>(`${this.eventURL + '/api/editEvent'}/${event.id}`, event)
}
}
