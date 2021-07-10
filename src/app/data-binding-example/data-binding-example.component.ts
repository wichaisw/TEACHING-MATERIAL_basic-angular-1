import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
interface ContentOptions {
  name: string;
  value: number;
}

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styles: [
  ]
})
export class DataBindingExampleComponent implements OnInit, OnChanges {
  @ViewChild('content3Input') content3Input: ElementRef = new ElementRef<string>('');
  @Input('parentMessage') inputMessage: string = '';
  @Output() sendToParent = new EventEmitter<string>();
  title: string = 'Basic Angular Form';
  content1: any = '';
  content2: any = '';
  content3: string = '';
  content4: number | null = null;
  
  contentOptions: ContentOptions[] = [
    {name: 'test1', value: 1},
    {name: 'test2', value: 2},
    {name: 'test3', value: 3},
  ]

  ngOnInit() {
    console.info("init!")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  onContentChange(event: Event) {
    this.content1 = (<HTMLInputElement>event.target).value;
  };

  onContentChange3() {
    this.content3 = this.content3Input.nativeElement.value;
  };

  onClickButton(value: string) {
    this.sendToParent.emit(value);
  }
}
