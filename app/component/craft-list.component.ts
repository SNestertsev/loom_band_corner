import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { IGalleryCathegory, ICraftItem } from '../model/craft.gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
    moduleId: module.id,
    selector: "lbc-craft-list",
    templateUrl: "craft-list.component.html"
})
export class CraftListComponent implements OnInit, OnChanges {
    @Input() cathegory: IGalleryCathegory;
    cartItems: ICraftItem[];

    constructor(
        private _galleryService: GalleryService,
        private _route: ActivatedRoute,
        private _location: Location
    ) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._galleryService.getCathegory(id)
                .then(cathegory => this.cathegory = cathegory); 
        });
    }

    ngOnChanges() {
        if (this.cathegory) {
            console.debug("CraftListComponent.OnChanges for cathegory: " + this.cathegory.id);
        }
        else {
            console.debug("CraftListComponent.OnChanges without cathegory");
        }
    }
}