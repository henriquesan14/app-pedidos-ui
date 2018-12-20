import { ItemPedido } from "./item-pedido";

export interface Produto {
    id: number;
    nome: string;
    valorUnitario: number;
    itensPedidos: ItemPedido[];

}
