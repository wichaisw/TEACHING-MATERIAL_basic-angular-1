import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Basic Angular Form';
  content1: any = '';
  content2: any = '';
  content3: string = '';
  @ViewChild('content3Input') content3Input: ElementRef = new ElementRef<string>('');


  onContentChange(event: Event) {
    this.content1 = (<HTMLInputElement>event.target).value;
  };

  onContentChange3() {
    this.content3 = this.content3Input.nativeElement.value;
  };


}


