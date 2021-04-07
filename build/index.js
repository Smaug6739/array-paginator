"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayPaginator = void 0;
class arrayPaginator {
    constructor(data, maxPerPerPage, currentPage) {
        this.data = data;
        this.maxPerPage = maxPerPerPage || 5;
        this.currentPage = currentPage || 1;
        this.totalPages = Math.ceil(this.data.length / this.maxPerPage);
    }
    get current() {
        return this.currentPage;
    }
    set current(page) {
        if (page)
            this.currentPage = page;
    }
    get all() {
        return this.data;
    }
    get total() {
        return this.totalPages;
    }
    page(page) {
        if (!page)
            return undefined;
        this.current = page;
        const skipValues = (page * this.maxPerPage) - this.maxPerPage;
        const pageArray = this.data.slice(skipValues, skipValues + this.maxPerPage);
        if (!pageArray || !pageArray.length)
            return undefined;
        return pageArray;
    }
    first() {
        return this.page(1);
    }
    last() {
        return this.page(this.totalPages);
    }
    next() {
        return this.page(this.currentPage + 1);
    }
    previous() {
        return this.page(this.currentPage - 1);
    }
    hasNext(index) {
        if (index) {
            return this.totalPages > index + 1 ? true : false;
        }
        return this.totalPages > this.currentPage ? true : false;
    }
    hasPrevious(index) {
        if (index) {
            return index - 1 > 0 ? true : false;
        }
        return this.currentPage - 1 > 0 ? true : false;
    }
}
exports.arrayPaginator = arrayPaginator;
