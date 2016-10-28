import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { WelcomeComponent } from './component/welcome.component';
import { GalleryComponent } from './component/gallery.component';
import { CraftListComponent } from './component/craft-list.component';

import { GalleryService } from './services/gallery.service';

@NgModule({
    imports:      [
        BrowserModule, 
        HttpModule, 
        FormsModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        WelcomeComponent,
        GalleryComponent,
        CraftListComponent 
    ],
    providers:    [ GalleryService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
