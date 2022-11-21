import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'projects/easylib/src/lib/components/card/basic-card/card.module';
import { TextProppertieComponent } from './components/text-proppertie/text-proppertie.component';
import { CardComponent } from './components/card/card.component';
import { ParagraphModule } from 'projects/easylib/src/lib/components/paragraph/paragraph.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OverlayCardModule } from 'projects/easylib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    TextProppertieComponent,
    CardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /// My lib Module
    CardModule,
    ParagraphModule,
    OverlayCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
