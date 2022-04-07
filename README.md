# Paginator of arrays

![NPM](https://nodei.co/npm/array-paginator.png)

![[NPM package](https://www.npmjs.com/package/array-paginator)](https://badge.fury.io/js/array-paginator.svg)
![[LICENSE](https://github.com/Smaug6739/array-paginator.js/blob/master/LICENSE)](https://img.shields.io/github/license/Smaug6739/array-paginator.svg)

This module is a paginator of arrays for simplify the pagination with arrays.  
This module split yours arrays in pages and you can recover this pages.

## Getting started

### Installation

With npm :

```sh-session
npm install array-paginator
```

With yarn :

```sh-session
yarn add array-paginator
```

### Import module

With CommonJS syntax :

```js
const { Paginator } = require("array-paginator");
```

With module syntax :

```js
import { Paginator } = from 'array-paginator';
```

## Usage

Create a new Paginator with an array as a parameter and two optionals parameters : max items per page (default:5) and current page (default:1) :

```js
const paginator = new Paginator(data, 15, 1)`.
```

## Paginator#update(newData)

Update data in array.

Parameters :

- newData : An array with new data (type : `Array<any>`).

Type : Boolean

```js
const hasLastPage = paginator.update(data); // Update data
```

## Paginator#page(page)

Return a specific page.

Parameters :

- page : The page to get (type : `number`)

Type : Array

```js
const page = paginator.page(1); // Get page one
```

## Paginator#first()

Return the first page.

Type : Array

```js
const firstPage = paginator.first(); // Get first page
```

## Paginator#last()

Return the last page.

Type : Array

```js
const lastPage = paginator.last(); // Get last page
```

## Paginator#next()

Return the next page.

Type : Array

```js
const nextPage = paginator.next(); // Get next page
```

## Paginator#previous()

Return the previous page.

Type : Array

```js
const previousPage = paginator.previous(); // Get previous page
```

## Paginator#hasFirst()

Return true if first page exist.

Type : Boolean

```js
const previousPage = paginator.previous(); // Get previous page
```

## Paginator#hasNext()

Return true if next page exist.

Type : Boolean

```js
const hasNextPage = paginator.hasNext(); // true if next page exists
```

## Paginator#hasPrevious()

Return true if previous page exist.

Type : Boolean

```js
const hasPreviousPage = paginator.hasPrevious(); // true if previous page exists
```

## Paginator#hasLast()

Return true if last page exist.

Type : Boolean

```js
const hasLastPage = paginator.hasLast(); // true if last page exists
```

## Properties

---

## Paginator.current

The current page.  
Type : Number

## Paginator.all

Return all data.  
Type : Array

## total

The total of pages.  
Type : Number

## Example

```js
const { Paginator } = require("array-paginator");
const data = Array.from(new Array(50).keys());
const pager = new Paginator(data, 10);

pager.page(2); // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pager.first(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
pager.last(); // [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
pager.next(); // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pager.previous(); // undefined
pager.hasNext(); // true
pager.hasPrevious(); // false

pager.current; //5
pager.all; // [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, ... 49]
pager.total; //5
```
