// Use array inside an object
const adventurer = {
    name: "Miranda",
    hitPoint: 10;
    belongings: ["staff", "potions", "medicine"],
    companion: {
        name: "Brownie",
        type: "Dog"
    }
}

console.log(`My companion's name is ${adventurer.companion.name}`);

// access the values in the array
console.log(adventurer.belongings)

// access the first belonging
console.log(`first belonging ${adventurer.belongings[0]}`);

// iterate over an array inside of an object
for(let i = 0; i < adventurer.belongings.length; i++){
    console.log(adventurer.belongings[i])
}

// #1 OBJ within OBJ
