// this is not correct, come back to this

function deepEqual(x, y) {
    if (x === y)
        return true;
    if (x == null || typeof a != "object" || y == null || typeof y != "object")
        return false;
    var propsInX = 0;
    var propsInY = 0;
    
    for (var prop in x)
        propsInX += 1;
        
    for (var prop in y)
        propsInY += 1;
        
    if (!(prop in x) || !deepEqual(x[prop], y[prop]))
        return false;
        
    return propsInX == propsInY;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
