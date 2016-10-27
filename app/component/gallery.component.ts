import { Component, OnInit } from '@angular/core';
import { IGalleryCathegory, GalleryCathegory } from '../model/craft.gallery';

@Component({
  moduleId: module.id,
  selector: 'lbc-gallery',
  templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit { 
  cathegoriesTitle: string = "Cathegories";
  noCathegoriesMessage: string = "No cathegories";
  cathegories: IGalleryCathegory[];
  isEditing: boolean = false;
  newCathegoryName: string = "";

  ngOnInit() {
    this.cathegories = [
      {
        id: 1,
        name: "Bracelets",
        description: "Description of the first cathegory"
      },
      {
        id: 2,
        name: "Figures 2D",
        description: "Description of the second cathegory"
      },
      {
        id: 3,
        name: "Figures 3D",
        description: "Description of the third cathegory"
      }
    ];
  }

  public hasCathegories(): boolean {
    return this.cathegories && this.cathegories.length > 0;
  }

  public onEdit() {
    this.newCathegoryName = "";
    this.isEditing = true;
  }

  public onAdd() {
    if (this.newCathegoryName && this.newCathegoryName.length > 0) {
      this.cathegories.push(new GalleryCathegory(4, this.newCathegoryName, ""));
    }
    //this.cathegories.push(new GalleryCathegory(4, "New cathegory", ""));
  }

  public onDone() {
    this.isEditing = false;
  }

}
