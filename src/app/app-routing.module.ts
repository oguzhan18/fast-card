import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TextProppertieComponent } from './components/text-proppertie/text-proppertie.component';

const routes: Routes = [
  {path:'card', component:CardComponent},
  {path:'text', component:TextProppertieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
