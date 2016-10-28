import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IGalleryCathegory, GalleryCathegory } from '../model/craft.gallery';

@Injectable()
export class GalleryService {

    constructor(private _http: Http) { }

    getCathegories(): Observable<IGalleryCathegory[]> {
        return this._http.get('api/cathegories')
            .map((response: Response) => <IGalleryCathegory[]>response.json())
            .do(data => console.log('All cathegories: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // Adds a cathegory, if it doesn't yet exist in the list (check by name)
    addCathegory(name: string, description: string): boolean {
        let cathegoryExists: boolean;
        /*cathegoryExists = this._cathegories.filter( (cat) => cat.name === name).length > 0;
        if (!cathegoryExists) {
            let maxCathegoryId = this._cathegories.reduce( (a, b) => a.id > b.id ? a : b).id;
            this._cathegories.push(new GalleryCathegory(maxCathegoryId + 1, name, description));
        }*/
        return false;
    }

    getCathegory(id: number): Observable<IGalleryCathegory> {
        return this._http.get('api/cathegory?id=' + id)
            .map((response: Response) => <IGalleryCathegory>response.json())
            .do(data => console.log('Cathegory: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}