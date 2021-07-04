import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Basic Angular Form';
  content1: any = '';
  content2: any = '';

  onContentChange(event: Event) {
    this.content1 = (<HTMLInputElement>event.target).value;
  };


}


