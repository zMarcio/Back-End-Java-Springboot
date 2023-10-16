import { PersistencyProtocol } from "../entities/Interface/PersistencyProtocol";

export class Persistency implements PersistencyProtocol {
    saveOrder():void{
        console.log('Pedido salvo com sucesso...')
    }
}