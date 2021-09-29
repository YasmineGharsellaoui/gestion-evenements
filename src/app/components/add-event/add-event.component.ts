import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  //declaration des variables 
  event:any={};
  eventForm:FormGroup;
  id :any;
  title:any;
  events:any;
  imagePreview:any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private eventService : EventService) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      //Edit
      this.title="Edit";
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
    else{
      //Add
      this.title="Add";
    }
    //Création des inputs
    this.eventForm = this.formBuilder.group({
      name: [''],
      date: [''],
      description: [''],
      img: ['']
    });
  }

  addOrEditEvent(){
    if (this.id) {
      //edit
      // for (let i = 0; i < this.events.length; i++) {
      //     if (this.events[i].id == this.id) {
      //       this.events[i].name= this.event.name;
      //       this.events[i].date= this.event.date;
      //       this.events[i].description= this.event.description;

      //     }
      // }
      // localStorage.setItem('events', JSON.stringify(this.events));

      this.eventService.updateEvent(this.event).subscribe(
        (data)=>{
          console.log(data.message);
          
        });
        }
    else {
      //add
    //   let events = JSON.parse(localStorage.getItem("events") || "[]");
    // let idEvent = JSON.parse(localStorage.getItem("idEvent") || "1");

    // this.event.id=idEvent;
    // events.push(this.event);

    // localStorage.setItem("events",JSON.stringify(events));


    // localStorage.setItem("idEvent", idEvent+1);

    this.eventService.addEvent(this.event, this.eventForm.value.img).subscribe(
      (data)=>{
        console.log(data.message);
        
        
      })

    }
    

  }


  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Event
    this.eventForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.eventForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
    this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
    }

}
