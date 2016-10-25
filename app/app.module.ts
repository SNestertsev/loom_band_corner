import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { GalleryComponent } from './component/gallery.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GalleryComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
