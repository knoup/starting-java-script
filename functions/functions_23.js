/*
    Operadores unários
    typeof
    delete
*/
const person = {
    name: "Fred",
    age: 25,
}
delete person.age
console.log(typeof person)
console.log(person)