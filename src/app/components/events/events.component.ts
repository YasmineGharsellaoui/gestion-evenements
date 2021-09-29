import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 events:any;
  constructor(private eventService : EventService) { }

  ngOnInit() {
    // this.events = JSON.parse(localStorage.getItem("events") || "[]");

    this.eventService.getEvents().subscribe(
      (data)=> {
        this.events = data.events;
      }
    )
  }


  // update(x){
  //   this.events = x;
  // }
}
