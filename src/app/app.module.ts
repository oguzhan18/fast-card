import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'projects/pi-lib/src/lib/components/card/basic-card/card.module';
import { TextProppertieComponent } from './components/text-proppertie/text-proppertie.component';
import { BCardComponent } from './components/card/bcard/bcard.component';
import { ParagraphModule } from 'projects/pi-lib/src/lib/components/paragraph/paragraph.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OverlayCardModule } from 'projects/pi-lib/src/public-api';
import { OcardComponent } from './components/card/ocard/ocard.component';

@NgModule({
  declarations: [
    AppComponent,
    TextProppertieComponent,
    BCardComponent,
    NavbarComponent,
    OcardComponent
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
