import { cartItem } from "../entities/Interface/card-item";

export class Product implements cartItem{
    constructor(public name:string, public price:number){}
}