import { cartItem } from './Interface/card-item'
import { ShoppingCartProtocol } from './Interface/shopping-cart-protocol';
import { Discount } from './discount';

export class ShoppingCart implements ShoppingCartProtocol {
    private readonly _items: cartItem[] = [];

    constructor(private readonly discount:Discount){}

    addItem( item : cartItem) : void {
        this._items.push(item)
    }

    removeItem(index:number):void{
        this._items.splice(index, 1)
    }

    get items() : Readonly<cartItem[]>{
        return this._items
    }

    total():number{
        return + this._items.reduce((total ,next ) => total + next.price ,0).toFixed(2)
    }

    totalWithDiscount():number{
        return this.discount.calculate(this.total())
    }

    isEmpty():boolean{
        return this._items.length === 0
    }

    clear():void{
        this._items.length = 0
    }
}
