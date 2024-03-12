export interface Item {
    id:number,
    slug:string,
    label: string;
    category:string,
    img: string[];
    prevPrice: string;
    currPrice: string;
    color: string[];
    isNew?:boolean;
}