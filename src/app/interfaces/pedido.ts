import { ItemPedido } from "./item-pedido";
import { Mesa } from "./mesa";

export interface Pedido {
    id: number;
    dataPedido: string;
    valorTotal: number;
    itensPedidos: ItemPedido[];
    mesa: Mesa;
}
