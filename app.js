// // Use array inside an object
// const adventurer = {
//     name: "Miranda",
//     hitPoint: 10;
//     belongings: ["staff", "potions", "medicine"],
//     companion: {
//         name: "Brownie",
//         type: "Dog",
//         belongings: ["ball", "bed", "water bowl", "food bowl"]
//     }
// }

// console.log(`My companions name is ${adventurer.companion.name}`);
// console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`)

// // access the values in the array
// console.log(adventurer.belongings)

// // access the first belonging
// console.log(`first belonging ${adventurer.belongings[0]}`);

// // iterate over an array inside of an object
// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i])
// }

// // #1 OBJ within OBJ

// const movies = [
//     { title: "Tokyo Story" },
//     { title: "Paul Blart: Mall Cop" },
//     { title: "L'Avventura" }
// ];

// console.log(movies[0].title)

// //Looping over array of objects
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }

// Combine objects, arrays and functions
// const foo = {
//     arr: [1,2,3],
//     obj: {
//         prop: `object property`
//     },
//     doSomething: () => {
//         console.log("I did something!")
//     }
// }
// console.log(foo.arr[0]); // 1
// console.log(foo.obj.prop); // 'object property'
// foo.doSomething(); // 'I did something!'

// An array of arrays
const foo = [
    [1,2,3],
    ["4", "5", "6"],
    [7, 8, 9],
    () => {
        console.log("I am a function inside an array")
    }
]
console.log(foo[0]) // []
console.log(foo[0][1]) // 2

// Storing functions in an array
console.log(foo[3]());