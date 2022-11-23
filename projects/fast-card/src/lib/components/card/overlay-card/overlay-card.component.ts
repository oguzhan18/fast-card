import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pi-ocard',
  templateUrl: './overlay-card.component.html',
  styleUrls: ['./overlay-card.component.scss']
})
export class OverlayCardComponent implements OnInit {
  cardStytles = {}
  subFontStyles = {};
  FontStyles = {};

  @Input() title: string = "";
  @Input() subTitle: string = "";


  @Input() cardWidth: string = "";
  @Input() cardHeight: string = "";
  @Input() cardBorder: string = "";
  @Input() cardSho: string = "";
  @Input() cardShadow: string = "";
  @Input() cardml: string = "";
  @Input() cardmr: string = "";
  @Input() cardmt: string = "";
  @Input() cardmb: string = "";

  // IMAGES
  @Input() imagePosition: string = "";
  @Input() imageURL: string = "";
  @Input() imageTarget: string = "";
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";
  @Input() picTitile: string = "";
  @Input() src: string = "";
  @Input() altText: string = "";

  // SUB TEXT
  @Input() subFontFamily: string = "";
  @Input() subFontSize: string = "";
  @Input() subFontStyle: string = "";
  @Input() subFontWeight: string = "";
  @Input() subFontColor: string = "";
  @Input() subFontBGcolor: string = "";
  @Input() subFontVariant: string = "";
  @Input() subFontKerning: string = "";
  @Input() subFontShadow: string = "";
  @Input() subtitleAlign: string = ""
  @Input() sml: string = "";

  // TITLE TEXT
  @Input() titleFontFamily: string = "";
  @Input() titleFontSize: string = "";
  @Input() titleFontStyle: string = "";
  @Input() titleFontWeight: string = "";
  @Input() titleFontColor: string = "";
  @Input() titleFontBGcolor: string = "";
  @Input() titleFontVariant: string = "";
  @Input() titleFontKerning: string = "";
  @Input() titleFontShadow: string = "";
  @Input() titleAlign: string = "";
  @Input() tml: string = "";
  @Input() titlePosition: string = "";


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
      "text-shadow": this.subFontShadow,
      // Benzer
      "text-align": this.subtitleAlign,
      "margin-left": this.sml,
    };
    this.FontStyles = {
      'fontFamily': this.titleFontFamily,
      'font-size': this.titleFontSize,
      'font-style': this.titleFontStyle,
      'font-weight': this.titleFontWeight,
      'color': this.titleFontColor,
      'background-color': this.titleFontBGcolor,
      'font-variant': this.titleFontVariant,
      "font-kerning": this.titleFontKerning,
      "text-shadow": this.titleFontShadow,
      // Benzer
      "text-align": this.titleAlign,
      "margin-left": this.tml,
    };
    this.cardStytles = {
      "margin-left": this.cardml,
      "margin-right": this.cardmr,
      "margin-top": this.cardmt,
      "margin-bottom": this.cardmb,
    }




  }

  imageHREF() {
    if (this.imageURL == "") {
      console.log("empty url");
    }
    else {
      if (this.imageTarget == "true") { window.open(this.imageURL, "_blank"); }
      else { window.location.href = this.imageURL; }
    }
  }
  constructor(private router: Router,) { }


}
