# Paginator of arrays
![NPM](https://nodei.co/npm/array-paginator.png) <br>
![version](https://badge.fury.io/js/array-paginator.svg) 
[![GitHub license](https://img.shields.io/github/license/SmaugDev/array-paginator.svg)](https://github.com/SmaugDev/array-paginator.js/blob/master/LICENSE)
<hr>
This module is a paginator of arrays for simplify the pagination with arrays. <br>
This module split yours arrays in pages and you can recover this pages. <br> 

## Instalation

Install the module : `npm install --save array-paginator`

## Usage

Create a new Pagniator with an array as a parameter and two optionals parameters : max items per page (default:5) and current page (default:1) :
`new Paginator(data, 15, 1)`.

### Methods : 



`page(number)` return a specific page (parameter is a number) <br>
Type : Array

`first()` return the first page. <br>
Type : Array

`last()` return the last page. <br>
Type : Array

`next()` return the next page. <br>
Type : Array

`previous()` return the previous page. <br>
Type : Array

`hasNext()` return true if next page exist (boolean). <br>
Type : boolean

`hasPrevious()` return true if previous page exist. <br>
Type : boolean

### Properties

`.current` The current page. <br>
Type : Number

`.all` return all data. <br>
Type : Array

`total()` The total of pages. <br>
Type : Number

## Example 
```js
const { Paginator } = require('array-paginator');
const data =  Array.from(new Array(50).keys())
const pager = new Paginator(data, 10);

pagger.page(2) // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pagger.first() // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
pagger.last() // [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
pagger.next() // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pagger.previous() // undefined
pagger.hasNext() // true
pagger.hasPrevious() // false

pager.current //5
pager.all // [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, ... 49]
pager.total //5

```
