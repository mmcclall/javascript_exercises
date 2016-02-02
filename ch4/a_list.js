// creates a list from an array, as you would expect
function arrayToList(array) {
    var list = null;
    // iterates backwards through the array, so the first rest is set to null
    for (var i = array.length - 1; i >= 0; i--)
        list = { value: array[i], rest: list };  
    return list;
}

// undoes the last function, creating a new array
function listToArray(list) {
    var array = [];
    // will iterate until list = null and then stop
    // setting list.rest to list directs the function to the next item
    for (list; list; list = list.rest)
        array.push(list.value);
    return array;
}

// adds an element to the front of the list
function prepend(element, list) {
    var array = listToArray(list);
    // unshift adds new elements to the beginning of an array
    array.unshift(element);
    // convert the array back to a list
    var newList = arrayToList(array);
    return newList;
}

// find the value of an item at a certain list position
function nth (list, pos) {
    /* non-recursive
    // use listToArray to pull the array position
    var array = listToArray(list);
    return array[pos];
    */
    
    // recursive version
    if (pos == 0)
        return list.value;
    else
        // this works
        return nth(list.rest, pos - 1);
        
}



console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));