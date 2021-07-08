import { Component, ElementRef, ViewChild } from '@angular/core';

interface ContentOptions {
  name: string;
  value: number;
}

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
  content4: number | null = null;

  contentOptions: ContentOptions[] = [
    {name: 'test1', value: 1},
    {name: 'test2', value: 2},
    {name: 'test3', value: 3},
  ]


  onContentChange(event: Event) {
    this.content1 = (<HTMLInputElement>event.target).value;
  };

  onContentChange3() {
    this.content3 = this.content3Input.nativeElement.value;
  };


}


