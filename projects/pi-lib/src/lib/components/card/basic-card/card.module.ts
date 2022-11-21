import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BasicCardComponent } from './basic-card.component';
import { Safe } from '../../../utils/pipe/safeHTML.pipe';



@NgModule({
  declarations: [
    BasicCardComponent,
    Safe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BasicCardComponent
  ]
})
export class CardModule { }
