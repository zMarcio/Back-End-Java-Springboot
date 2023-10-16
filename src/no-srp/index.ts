type Product = { name:string , price: number }
type OrderStatus = 'open' | 'closed'
export class ShoppingCart {
    private readonly _items: Product[] = [];
    private _orderStatus: OrderStatus = 'open'

    addItem( item : Product) : void {
        this._items.push(item)
    }

    removeItem(index:number):void{
        this._items.splice(index, 1)
    }

    get items() : Readonly<Product[]>{
        return this._items
    }

    get orderStatus(): OrderStatus{
        return this._orderStatus
    }

    total():number{
        return + this._items.reduce((total ,next ) => total + next.price ,0).toFixed(2)
    }

    checkout():void{
        if(this.isEmpty()){
            console.log('Seu carrinho está vazio')
        }

        this._orderStatus = 'closed'
        this.sendMessage(`Seu pedido foi recebido, com total ${this.total()}`)
        this.saveOrder()
        this.clear()
    }

    isEmpty():boolean{
        return this._items.length === 0
    }

    sendMessage(msg:string):void{
        console.log("Mensagem enviada: ", msg)
    }

    saveOrder():void{
        console.log('Pedido salvo com sucesso...')
    }

    clear():void{
        this._items.length = 0
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({name:'camiseta', price:40})
shoppingCart.addItem({name:'lapis', price:1.5})
shoppingCart.addItem({name:'caderno', price:1.17})

console.log(shoppingCart.items)
console.log(shoppingCart.total())
shoppingCart.checkout()
console.log(shoppingCart.orderStatus)