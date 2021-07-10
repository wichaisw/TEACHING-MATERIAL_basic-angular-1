import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  content5: string = 'message from parent'
  childContent: string = '';
  
  setChildContent(eventValue: string) {
    this.childContent = eventValue;
  }
}


