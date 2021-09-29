import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  id:any;
  events:any;
  event:any;
  constructor(private activatedRoute: ActivatedRoute , private eventService: EventService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
      
    // this.events = JSON.parse(localStorage.getItem("events") || "[]");


    // for (let i = 0; i < this.events.length; i++) {
    //   if (this.events[i].id == this.id) {
    //     this.event = this.events[i];
    //     console.log('my event', this.event);
        
    //   }
      
    // }
    
    this.eventService.getEvent(this.id).subscribe(
      (data)=>{
        this.event = data.event;
      
      })
  }

}
