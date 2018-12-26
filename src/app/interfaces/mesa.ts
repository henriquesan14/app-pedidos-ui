import { Pedido } from './pedido';

export interface Mesa {
    id: number;
    nome: string;
    descricao: string;
    pedidos: Pedido[];
}

export interface PageMesa {
     content: Array<Mesa>;
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


