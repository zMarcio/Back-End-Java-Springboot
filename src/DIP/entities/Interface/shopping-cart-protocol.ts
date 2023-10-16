import { cartItem } from "./card-item"


export interface ShoppingCartProtocol {
    items : Readonly<cartItem[]>
    addItem( item : cartItem) : void
    removeItem(index:number):void
    total():number
    totalWithDiscount():number
    isEmpty():boolean
    clear():void
}
