function extractElement(arr){

    const [first, second, ...rest] = arr; //destructing assignmenet is used, unpack the value from the array
    const lastElement = arr.pop();//extract the last element

    return [first, second, lastElement];//return 1st 2nd and last element
}

let arr1 = [4, 5, 8, 9, 7, 2, 20, 8];
let extractedElement = extractElement(arr1); //calling a function
console.log(extractedElement);


// output:-
// [ 4, 5, 8 ]