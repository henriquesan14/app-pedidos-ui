import { Pedido } from "./pedido";

export interface Mesa {
    id: number;
    nome: string;
    descricao: string;
    pedidos: Pedido[];
}
