import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {


  subFontStyles = {};
  FontStyles = {};
  @Input() title: string = "";
  @Input() picTitile: string = "";
  @Input() src: string = "";
  @Input() altText: string = "";
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";
  @Input() subTitle: string = "";
  @Input() boxWidth: string = "";
  @Input() boxBorder: string = "";

  // TEXT
  @Input() subFontFamily    : string = "";
  @Input() subFontSize      : string = "";
  @Input() subFontStyle     : string = "";
  @Input() subFontWeight    : string = "";
  @Input() subFontColor     : string = "";
  @Input() subFontBGcolor   : string = "";
  @Input() subFontVariant   : string = "";
  @Input() subFontKerning   : string = "";
  @Input() subFontShadow    : string = "";

  // IMAGES
  @Input() imagePosition: string = "";


  ngOnInit() {
    this.subFontStyles = {
      'fontFamily': this.subFontFamily,
      'font-size': this.subFontSize,
      'font-style': this.subFontStyle,
      'font-weight': this.subFontWeight,
      'color': this.subFontColor,
      'background-color': this.subFontBGcolor,
      'font-variant': this.subFontVariant,
      "font-kerning": this.subFontKerning,
      "text-shadow":this.subFontShadow,
    };
  }


 constructor() { }


}
