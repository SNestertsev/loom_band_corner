
export class CraftItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    available: boolean;
}

export class CraftGallery {
    id: number;
    name: string;
    description: string;
    items: CraftItem[];
}