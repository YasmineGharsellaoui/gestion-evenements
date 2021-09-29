import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() childEvent:any;

  // @Output() newEvents = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

//   delete(id:any){
//     let events = JSON.parse(localStorage.getItem("events") || "[]");
//     for (let i = 0; i < events.length; i++) {
//       if (events[i].id == id ) {
//         events.splice(i,1);
//       }
//     }

//     localStorage.setItem("events", JSON.stringify(events));
    
// // Déclenchement de l'evenement
//     this.newEvents.emit(events);
//   }

}
