import { Component, OnInit } from '@angular/core';
import { CraftGallery, CraftItem } from '../model/craft.gallery';

@Component({
  moduleId: module.id,
  selector: 'craft-gallery',
  templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit { 
  galleries: CraftGallery[];

  ngOnInit() {

  }
}
