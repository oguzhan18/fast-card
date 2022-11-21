import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  otherStyles = {};
  @Input() title: string = "";
  @Input() src: string = "";
  @Input() altText: string = "";
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";
  @Input() subTitle: string = "";
  @Input() boxWidth: string = "";
  @Input() boxBorder: string = "";

  @Input() fontFamily: string = "";
  @Input() fontSize: string = "";
  @Input() fontStyle: string = "";
  @Input() fontWeight: string = "";
  @Input() fontColor: string = "";
  @Input() fontBGcolor: string = "";
  @Input() fontVariant: string = "";
  @Input() fontKerning: string = ""

  constructor() { }
  ngOnInit() {
    this.otherStyles = {
      'font-style': this.fontStyle,
      'font-weight': this.fontWeight,
      'font-size': this.fontSize,
      'color': this.fontColor,
      'background-color': this.fontBGcolor,
      'font-variant': this.fontVariant,
      'fontFamily': this.fontFamily,
      "font-kerning":this.fontKerning
    };
  }

}
