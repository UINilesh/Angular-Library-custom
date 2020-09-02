import { NgModule } from '@angular/core';
import { PosterComponent } from './poster/poster.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [PosterComponent],
  imports: [
    HttpClientModule
  ],
  exports: [PosterComponent]
})
export class TvmazeModule { }
