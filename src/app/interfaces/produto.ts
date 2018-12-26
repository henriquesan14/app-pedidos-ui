import { ItemPedido } from "./item-pedido";

export interface Produto {
    id: number;
    nome: string;
    valorUnitario: number;
    itensPedidos: ItemPedido[];

}


export interface PageProduto {
     content: Array<Produto>;
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


