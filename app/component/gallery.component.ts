import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IGalleryCathegory, GalleryCathegory } from '../model/craft.gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
    moduleId: module.id,
    templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit {
    cathegoriesTitle: string = "Cathegories";
    noCathegoriesMessage: string = "No cathegories";
    cathegories: IGalleryCathegory[];
    selectedCathegory: IGalleryCathegory;
    isEditing: boolean = false;
    newCathegoryName: string = "";
    errorMessage: string;

    constructor(private _galleryService: GalleryService) {
    }

    ngOnInit() {
        this._galleryService.getCathegories()
            .subscribe(
                cathegories => this.cathegories = cathegories,
                error => this.errorMessage = <any>error);
    }

    public hasCathegories(): boolean {
        return this.cathegories && this.cathegories.length > 0;
    }

    public onSelect(cathegory: IGalleryCathegory): void {
        this.selectedCathegory = cathegory;
    }

    public onEdit(): void {
        this.newCathegoryName = "";
        this.isEditing = true;
    }

    public onAdd(): void {
        if (this.newCathegoryName && this.newCathegoryName.length > 0) {
            this._galleryService.addCathegory(this.newCathegoryName, "");
        }
    }

    public onDone(): void {
        this.isEditing = false;
    }

}
