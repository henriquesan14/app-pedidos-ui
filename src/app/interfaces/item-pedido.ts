import { Produto } from "./produto";

export interface ItemPedido {
    id: number;
    quantidade: number;
    produto: Produto;
    index: number;
}
