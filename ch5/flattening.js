// takes a multi-dimensional array and makes one dimenional
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));