import { ShoppingCart } from "./shopping-cart";
import { OrderStatus } from "./Interface/orderStatus";
import { Messaging } from "./messaging";
import { Persistency } from "../services/Persistency";

export class Order{
    private _orderStatus: OrderStatus = 'open'

    constructor( private readonly cart:ShoppingCart, private readonly messaging:Messaging, private readonly persistency:Persistency){}

    get orderStatus(): OrderStatus{
        return this._orderStatus
    }

    checkout():void{
        if(this.cart.isEmpty()){
            console.log('Seu carrinho está vazio')
        }

        this._orderStatus = 'closed'
        this.messaging.sendMessage(`Seu pedido foi recebido, com total ${this.cart.totalWithDiscount()}`)
        this.persistency.saveOrder()
        this.cart.clear()
    }
}