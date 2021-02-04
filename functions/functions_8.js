/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
}
const fred = new Person("Fredão")
const joao = new Person("João")
console.log(fred)
console.log(joao)
