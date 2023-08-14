function minMax(array) { //take array as input
    
    const min = Math.min(...array); //iterate on each element and expand it and find the minimum value from the array
    
    const max = Math.max(...array); //find the maximum value from the array

    return {min, max};  //return the minimum and maximum value as object
}

// calling  a function
const array = [5, 6, 8, 10, 2, 85, 50, 60, 10]; 
const minimumAndMaximum = minMax(array)
console.log(minimumAndMaximum);



// output:-
// { min: 2, max: 85 }