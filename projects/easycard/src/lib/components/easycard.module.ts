import { NgModule } from '@angular/core';
import { EasycardComponent } from './easycard.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    EasycardComponent
  ],
  imports: [
    MatCardModule
  ],
  exports: [
    EasycardComponent
  ]
})
export class EasycardModule { }
