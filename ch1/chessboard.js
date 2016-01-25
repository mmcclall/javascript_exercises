/*
    Creates a variable sized grid of hashes
*/
var size = 8;
var output;

for(var row = 0; row < size; row++) {
    if(row % 2 == 0)
        output = " ";
    else
        output = "#";
    for(var column = 1; column < size; column++) {
        if((row % 2 == 0 && column % 2 != 0) || (row % 2 != 0 && column % 2 == 0))
            output += "#";
        else
            output += " ";
    }
    console.log(output);
}