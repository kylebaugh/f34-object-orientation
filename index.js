
// build out object
const person = {
    firstName: 'Kyle',
    lastName: 'Baugh', 
    age: 30,

    // nest objects and arrays inside other objects

    favorites: {
        food: 'Porterhouse Steak', 
        color: 'Azure',
        movies: {
            movie1: 'Logan',
            movie2: 'Lord of the Rings', 
            movie3: 'V for Vendetta'
        }, 
        artists: ['Tool', 'Green Day', "Disturbed"]
    },

    // set up function as key-value pair 

    greeting: (myVar) => {
        return `The variable is ${myVar}`
    }

}

// access individual values

console.log(person['lastName'])
console.log(person.lastName)


// reassign values 

person.age = 31
console.log(person)


// add key-value pairs

person.height = `5' 10''`
console.log(person)


// access/manipulate nested values

console.log(person.favorites.color)
console.log(person.favorites.movies.movie2)
person.favorites.artists.push('Shinedown')
console.log(person.favorites.artists)


// loop over object

for(let prop in person){
    console.log(`The property ${prop} is ${person[prop]}`)
}


// create animal class

class Animal {
    // constructor defines properties and sets values for given properties
    // values can be dynamic (based on user input) or static (hard coded)
    constructor(name, species, size){
        this.name = name
        this.species = species
        this.size = size
        this.deservesLove = true
    }

    // method is defined for each instance of the class
    greeting(){
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}.`)
    }
}

// new instance of the class is created, and saved to a variable
let macy = new Animal('Macy', 'Short Hair', 'big for a cat')

// we can view/access the data from the new macy object, as well as run the methods/functions
console.log(macy)
macy.greeting()


// creates dog class that has the capabilities of the Animal class, with more information
class Dog extends Animal {
    // add new variable(s) to constructor
    constructor(name, species, size, isHairy){
        // super grabs the values from the parent class
        super(name, species, size)

        // additional properties are defined
        this.isHairy = isHairy
    }
}

// new instance of Dog class is created, with access to everything inside the Animal class
let ahsoka = new Dog('Ahsoka', 'Lab', 'Medium', 'Extremely')

console.log(ahsoka)
ahsoka.greeting()
