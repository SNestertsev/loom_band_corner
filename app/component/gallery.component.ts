import { Component, OnInit } from '@angular/core';
import { GalleryCathegory, CraftItem } from '../model/craft.gallery';

@Component({
  moduleId: module.id,
  selector: 'lbc-gallery',
  templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit { 
  cathegoriesTitle: string = "Cathegories";
  noCathegoriesMessage: string = "No cathegories";
  cathegories: any[];

  ngOnInit() {
    this.cathegories = [
      {
        id: 1,
        name: "Cathegory 1",
        description: "Description of the first cathegory"
      },
      {
        id: 2,
        name: "Cathegory 2",
        description: "Description of the second cathegory"
      }
    ];
  }

  public hasCathegories(): boolean
  {
    return this.cathegories && this.cathegories.length > 0;
  }
}
