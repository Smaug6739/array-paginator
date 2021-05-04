<div align="center">
  <h1> Paginator of arrays </h1>
<img src="https://nodei.co/npm/array-paginator.png">  
  <a href="https://www.npmjs.com/package/array-paginator"> <img src="https://badge.fury.io/js/array-paginator.svg"></a>
  <a href="https://github.com/SmaugDev/array-paginator.js/blob/master/LICENSE"> <img src="https://img.shields.io/github/license/SmaugDev/array-paginator.svg"></a>
</div>
<hr>
This module is a paginator of arrays for simplify the pagination with arrays.  
This module split yours arrays in pages and you can recover this pages.  

## Instalation

Install the module : `npm install --save array-paginator`

## Usage

Create a new Pagniator with an array as a parameter and two optionals parameters : max items per page (default:5) and current page (default:1) :
`new Paginator(data, 15, 1)`.

### Methods

`page(number)` return a specific page (parameter is a number)  
Type : Array

`first()` return the first page.  
Type : Array

`last()` return the last page.  
Type : Array

`next()` return the next page.  
Type : Array

`previous()` return the previous page.  
Type : Array

`hasNext()` return true if next page exist (boolean).  
Type : boolean

`hasPrevious()` return true if previous page exist.  
Type : boolean

`update(newData)` Update data in array.  
Type : boolean

### Properties

`.current` The current page.  
Type : Number

`.all` return all data.  
Type : Array

`total()` The total of pages.  
Type : Number

## Example

```js
const { Paginator } = require('array-paginator');
const data =  Array.from(new Array(50).keys())
const pager = new Paginator(data, 10);

pager.page(2) // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pager.first() // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
pager.last() // [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
pager.next() // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pager.previous() // undefined
pager.hasNext() // true
pager.hasPrevious() // false

pager.current //5
pager.all // [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, ... 49]
pager.total //5

```
