// Print whatever you want. just type what you want to print in the console.
// console.log ("Hello, JavaScript!"); 

// for veriables, use let or const instead of var.
const names = 'S.M. Mahfuzur Rahman'; // string

// console.log(names); // string

let age = 25; // number
let isStudent = true; // boolean
let hobbies = ['reading', 'traveling', 'coding']; // array
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]); // array
}
hobbies.map((hobby) => console.log(hobby)); // array
let address = { 
    street: '123 Main St',
    city: 'Dhaka',
    country: 'Bangladesh'
};
for (let i in address) {
    console.log(`${i}: ${address[i]}`); // object
}

