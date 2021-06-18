export declare class Paginator<T> {
    data: Array<T> | undefined;
    maxPerPage: number;
    currentPage: number;
    totalPages: number | undefined;
    constructor(data: T[], maxPerPerPage?: number, currentPage?: number);
    load(data: Array<T>): void;
    get current(): number;
    set current(page: number);
    get all(): Array<T>;
    get total(): number;
    update(newData: Array<T>): boolean;
    page(page: number): (Array<T> | undefined);
    first(): (Array<T> | undefined);
    last(): (Array<T> | undefined);
    next(): (Array<T> | undefined);
    previous(): (Array<T> | undefined);
    hasNext(index?: number): boolean;
    hasPrevious(index?: number): boolean;
}
