import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayCardComponent } from './overlay-card.component';



@NgModule({
  declarations: [
    OverlayCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OverlayCardComponent
  ]
})
export class OverlayCardModule { }
