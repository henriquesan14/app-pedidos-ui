import { ItemPedido } from "./item-pedido";
import { Mesa } from "./mesa";

export interface Pedido {
    id: number;
    dataPedido: string;
    valorTotal: number;
    itensPedidos: ItemPedido[];
    mesa: Mesa;
}

export interface PagePedido {
    content: Array<Pedido>;
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
}


export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
}


export interface Sort {
    sorted: boolean;
    unsorted: boolean;
}
