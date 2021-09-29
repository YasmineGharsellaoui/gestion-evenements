import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.css']
})
export class DisplayEventsComponent implements OnInit {
  events:any;
  constructor(private router:Router, private eventService: EventService) { }

  ngOnInit() {

    // this.events = JSON.parse(localStorage.getItem("events") || "[]");

    this.eventService.getEvents().subscribe(
      (data)=>{
        console.log(data.events);
        
      this.events = data.events;
  })


  }

  displayEvent(id:any){
    this.router.navigate([`displayEvent/${id}`]);
  }

  editEvent(id:any){
    this.router.navigate([`editEvent/${id}`]);
  }

  // deleteEvent(id:any){
  //     for (let i = 0; i < this.events.length; i++) {
  //       if (this.events[i].id == id ) {
  //         this.events.splice(this.findPos(id),1);
  //       }
  //     }

  //     localStorage.setItem("events", JSON.stringify(this.events));
  // }

  deleteEvent(id:any){
    this.eventService.deleteEvent(id).subscribe(
      (data)=>{
        console.log(data.message);
        this.eventService.getEvents().subscribe(
          (data)=>{
            console.log(data.events);
            
          this.events = data.events;
      })

        
      }
    )
  }

  findPos(id:any){
    let pos;
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].id == id) {
        pos= i;
      }
    }
    return pos;
  }

  getColor(name){
    if (name == "camping") {
      return "green";
    }
    else if (name == "Athlète") {
      return "red";
    } else {
      return "blue";
    }
  }
}
