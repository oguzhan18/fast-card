import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-easycard',
  templateUrl: './easycard.component.html',
  styles: [
  ]
})
export class EasycardComponent implements OnInit {

  @Input() title: string = "";
  @Input() src: string = "";
  @Input() altText: string = "";
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";
  @Input() subTitle: string = "";
  @Input() boxWidth: string = "";
  @Input() boxBorder: string="";
  constructor() { }
  ngOnInit() {
  }

}
