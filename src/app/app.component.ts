import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';
  connectUser:any;
  isDisplay : any = false;
  dorra(){
    this.connectUser = JSON.parse(localStorage.getItem("userConnect"));

    if (this.connectUser.role == "admin") {
      this.isDisplay = !this.isDisplay;
    }
  }
}
