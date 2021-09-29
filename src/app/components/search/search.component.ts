import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  events:any;
  isDisplay :any;
  constructor(private formBuilder : FormBuilder, private eventService : EventService) { }

  ngOnInit() {
    this.isDisplay = false;
    this.searchForm = this.formBuilder.group({
      search : ['']
    })
  }

  search(s:any){
      this.eventService.getEventsByName(s).subscribe(
        (data)=> {
        
          this.events = data.events;
          this.isDisplay = !this.isDisplay;

        })
  }

}
