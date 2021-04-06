class arrayPaginator<T>  {
	data: Array<T>;
	maxPerPage: number;
	currentPage: number;
	totalPages: number;

	constructor(data: T[], maxPerPerPage?: number, currentPage?: number) {
		this.data = data;
		this.maxPerPage = maxPerPerPage || 5;
		this.currentPage = currentPage || 1;
		this.totalPages = Math.ceil(this.data.length / this.maxPerPage);
	}

	get current(): number {
		return this.currentPage;
	}

	set current(page: number) {
		if (page) this.currentPage = page;
	}

	get all(): Array<T> {
		return this.data;
	}

	get total(): number {
		return this.totalPages
	}

	page(page: number): (Array<T> | undefined) {
		if (!page) return undefined;
		this.current = page;
		const skipValues = (page * this.maxPerPage) - this.maxPerPage;
		const pageArray = this.data.slice(skipValues, skipValues + this.maxPerPage)
		if (!pageArray || !pageArray.length) return undefined;
		return pageArray;
	}

	first(): (Array<T> | undefined) {
		return this.page(1)
	}

	last(): (Array<T> | undefined) {
		return this.page(this.totalPages)
	}

	next(): (Array<T> | undefined) {
		return this.page(this.currentPage + 1);
	}

	previous(): (Array<T> | undefined) {
		return this.page(this.currentPage - 1);
	}

	hasNext(index?: number): boolean {
		if (index) {
			return this.totalPages > index + 1 ? true : false;
		}
		return this.totalPages > this.currentPage ? true : false;
	}

	hasPrevious(index?: number): boolean {
		if (index) {
			return index - 1 > 0 ? true : false;
		}
		return this.currentPage - 1 > 0 ? true : false;
	}

}

