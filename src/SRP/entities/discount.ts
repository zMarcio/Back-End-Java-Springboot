export abstract class Discount {
    protected  discount = 0
    
    calculate(value:number){
        return Number((value - value * this.discount).toFixed(2))
    }
}

export class FiftyDiscount extends Discount{
    protected readonly discount = 0.5
}

export class TenDiscount extends Discount{
    protected readonly discount = 0.1
}

export class NoDiscount extends Discount{}