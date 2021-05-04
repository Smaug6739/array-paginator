const { Paginator } = require('../index');
const data = Array.from(new Array(5).keys())
const data2 = Array.from(new Array(150).keys())
const pager = new Paginator(data, 10);
console.log(pager.total);

console.log(pager.first()) // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
pager.update(data2)
console.log(pager.first()) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(pager.total);
