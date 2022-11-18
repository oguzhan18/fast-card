import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title';
  subTitle = 'Subtitle';
  src = `./assets/images/comp.jpg`;
  imageWidth = `100`;
  altText = 'Card image 1';
  boxWidth = "30"
  boxBorder = "10px"
}
