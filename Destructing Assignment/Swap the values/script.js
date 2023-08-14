// Function Declaration
function swapValues(x, y){
    [x, y] = [y, x]; //destructing assignment
    return [x, y]; //return swap values
}

// varabials are declared in a and b
let a = 10;
let b = 30;

//log value before swap
console.log("Before swap: ",[a,b]);

//function calling
const swap = swapValues(a, b)
//log value after swap
console.log("After swap: ",swap);


// output:-
// Before swap:  [ 10, 30 ]
// After swap:  [ 30, 10 ]