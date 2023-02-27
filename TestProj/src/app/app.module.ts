import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroGalleryComponent } from './hero-gallery/hero-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeroGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
