import { OrderStatus } from "./Interface/orderStatus";
import { CustomerOrder } from "./Interface/customer-protocol";
import { ShoppingCartProtocol } from "./Interface/shopping-cart-protocol";
import { MessagingProtocol } from "./Interface/messaging-protocol";
import { PersistencyProtocol } from "./Interface/PersistencyProtocol";

export class Order{
    private _orderStatus: OrderStatus = 'open'

    constructor( 
        private readonly cart:ShoppingCartProtocol, 
        private readonly messaging:MessagingProtocol, 
        private readonly persistency:PersistencyProtocol, 
        private readonly customer:CustomerOrder
    ){}

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
        console.log('O cliente é: ', this.customer.getName(),
        this.customer.getIDN())
    }
}