// template string
/* const hubby = "Arif";
const wife = "Binu";

console.log(`${hubby} is the husband of ${wife}`); */

// spread operator
/* const number1 = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9, 10];

console.log([...number1, ...number2]) */

// rest operator
/* const student = {
    name: "Arif",
    department: "Computer",
    roll: "112864"
}

const { name, ...rest } = student;

console.log(rest); */


// object error handling technique
/* const student = undefined;

const { name, department, age } = student || {};

console.log(name, department, age); */


// function parameter destructuring

/* const user = {
    id: 1,
    name: "Binu",
    age: 20
}

const handleUser = ({ id, name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
}

handleUser(user); */


// nested object

/* const dreamGirl = [
    {
        dream1: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [
                            { name: "rofik" },
                            { name: "jobbar" },
                            { name: "salam" },
                            { name: "borkot" },
                        ],
                    },
                },
                { instagram: "https://www.instagram.com/" },
                { twitter: "https://twitter.com/" },
                { github: "https://github.com/" },
                { phone: ["01254823212", "02152457"] },
            ],
        },
    },
];

const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;

for (const friend of friends) {
    console.log(friend.name);
} */


// for loop
/* const names = [
    "Binu",
    "Arif",
    "Shahin"
]

// tech-1
// for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     console.log(name);
// }

// tech-2
for (const name of names) {
    console.log(name);
} */


// for in on object

/* const obj = { a: 1, b: 2, c: 3 };

for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
} */


// map

/* const number = [1, 2, 3, 4, 5, 6, 7, 8];

const squaredNumber = number.map(n => n * n);

console.log(squaredNumber); */


// filter & find on array

// const products = [
//     { id: 1, name: "apple", price: 500, color: "golden" },
//     { id: 2, name: "xiaomi", price: 124, color: "black" },
//     { id: 3, name: "samsung", price: 200, color: "black" },
//     { id: 4, name: "samsung2", price: 200, color: "black" },
//     { id: 5, name: "lenovo", price: 300, color: "pink" },
//     { id: 6, name: "xiaomi", price: 100, color: "pink" },
//     { id: 7, name: "lenovo", price: 300, color: "pink" },
// ];


// const result = products.filter(product => product.color === "pink");

// const result = products.find(product => product.color === "black");

// products.forEach(product => {
//     if (product.name === "samsung") {
//         console.log(product);
//         return;
//     }
// })


// api 
// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(value => console.log(value))


// ternary operator 

const name = "Arif";

console.log(name ? name : "Null");