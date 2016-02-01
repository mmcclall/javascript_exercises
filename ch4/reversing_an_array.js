
function reverseArray(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--)
        newArray.push(array[i]);
    return newArray;
}

function reverseArrayInPlace(array) {
    // i increases to half the array
    for (var i = 0; i < Math.floor(array.length / 2); i++) { 
        // temp is set to the value of pos i
        var temp = array[i];
        // pos i is set to the value of pos 4 (in the first case)
        array[i] = array[array.length - 1 - i];
        // value stored at temp is set to pos 4
        array[array.length - 1 - i] = temp;
    }
    return array;
}


console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);