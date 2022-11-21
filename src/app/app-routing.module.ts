import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayCardComponent } from 'projects/pi-lib/src/public-api';
import { BCardComponent } from './components/card/bcard/bcard.component';
import { OcardComponent } from './components/card/ocard/ocard.component';
import { TextProppertieComponent } from './components/text-proppertie/text-proppertie.component';

const routes: Routes = [
  { path: 'bcard', component: BCardComponent },
  { path: 'ocard', component: OcardComponent },
  { path: 'text', component: TextProppertieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
