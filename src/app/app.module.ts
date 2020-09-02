import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosterComponent } from 'projects/tvmaze/src/lib/poster/poster.component'
import { TvmazeModule } from 'tvmaze' 

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvmazeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
