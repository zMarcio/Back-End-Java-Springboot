/*
    SRP-Não colocar responsabilidade demais a uma classe

    Open/Closed-Entidades devem estar abertas para extensão, mas fechadas para modificação

    Liskov substitution principle - Se ele espera um animal, e o tipo for cachorro, ele é para herda de animal

    Interface segregation principle - Os clienste não devem ser forçados a depender de interfaces, type ou classes membros abastratos que não utilizam
*/
import { Persistency } from "./services/Persistency";
import { Messaging } from "./entities/messaging";
import { Order } from "./entities/order";
import { Product } from "./services/products";
import { ShoppingCart } from "./entities/shopping-cart";
import { FiftyDiscount, TenDiscount, NoDiscount } from "./entities/discount";

const fiftyDiscount = new FiftyDiscount()
const tenDiscount = new TenDiscount()
const noDiscount = new NoDiscount()


const messaging = new Messaging()
const shoppingCart = new ShoppingCart(fiftyDiscount);
const persistency = new Persistency()
const order = new Order(shoppingCart,messaging,persistency)

shoppingCart.addItem(new Product('camiseta', 40))
shoppingCart.addItem(new Product('lapis', 1.5))
shoppingCart.addItem(new Product('caderno', 1.17))

console.log(shoppingCart.items)
console.log("total no discount: ",shoppingCart.total())
console.log("discount: ",shoppingCart.totalWithDiscount())
order.checkout()
console.log(order.orderStatus)