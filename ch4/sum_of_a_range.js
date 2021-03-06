// returns a range of numbers between two points at a certain interval
// can also sum that range of numbers

function range(start, end, step) {
    var array = [];

    // check to ensure start is less than end
    if (start < end) {
        if (!step)
            step = 1;
        for (var i = start; i <= end; i += step)
            array.push(i);
            
    // if start is greater than end
    } else if (start > end) {
        // set the default step to a negative to prevent infinite loop
        if (!step)
            step = -1;
        for (var i = start; i >= end; i += step)
            array.push(i);
    }
    return array;
}

function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++)
        sum = sum + array[i];
    return sum;
}

console.log(range(1, 10));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(5, 2, -1));
// [ 5, 4, 3, 2 ]
console.log(sum(range(1, 10)));
// 55