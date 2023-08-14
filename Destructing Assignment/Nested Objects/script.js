function personDetails(obj) {
    
    const {name, address: {street}} = obj; //extract name and street using destructing object

    return {name, street}; //return the name and street
}

// object is created using person details
const person = {
    name: "Iqra",
    age: 19,
    address: {
        street: "chandwara, Mithanpura, Malighat",
        city: "mmuzaffarpur",
        state: "bihar"
    },
};

// log it into console
const result = personDetails(person);
console.log(result);

// output:-
// { name: 'Iqra', street: 'chandwara, Mithanpura, Malighat' }