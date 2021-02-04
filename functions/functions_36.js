// Estruturas de repetição

// for

for(let i = 10; i >0; i--) {
    if(i === 5) {
        continue;
    }

    //console.log(i)
}

// while
let i = 0
while(i < 10) {
    //console.log(i)
    i++
}

// for...of

let name = 'Fred'
let names = ['joao', 'paulo', 'lucas']

for(let char of names) {
    //console.log(char)
}

// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}