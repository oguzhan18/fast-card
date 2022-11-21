import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-proppertie',
  templateUrl: './text-proppertie.component.html',
  styleUrls: ['./text-proppertie.component.scss']
})
export class TextProppertieComponent implements OnInit {
  title = 'Title';
  subTitle = 'Subtitle';
  src = `../assets/images/comp.jpg`;
  imageWidth = `100`;
  altText = 'Card image 1';
  boxWidth = "30"
  boxBorder = "10px"
  fontSize = "15";
  fontStyle="italic";
  constructor() { }

  ngOnInit(): void {
  }

}
