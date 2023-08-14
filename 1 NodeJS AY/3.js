// var generateName = require("sillyname");
import generateName from "sillyName";
// npm install sillyname

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes from "superheroes"; 
// npm install superheroes

const name = superheroes.random();
console.log(`I am ${name}!`);
