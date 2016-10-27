export interface ICraftItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    available: boolean;
    cathegories: number[];
}

export class CraftItem implements ICraftItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    available: boolean;
    cathegories: number[];
}

export interface IGalleryCathegory{
    id: number;
    name: string;
    description: string;
}

export class GalleryCathegory implements IGalleryCathegory {

    constructor(
        public id: number,
        public name: string,
        public description: string
    ) {  }
}