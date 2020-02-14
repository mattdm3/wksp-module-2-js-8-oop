// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.
class Cat {
    constructor(name, breed) {
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
        this.name = name;
        this.breed = breed;
    }

    sleep = (hours) => {
        let amount = 5 * hours;
        this.tiredness = this.tiredness - amount;
        this.happiness += 5;

    }

    eat = (grams) => {
        this.hunger = this.hunger - (1 / 5 * grams);
        this.happiness += 5;
    }

    play = (minutes) => {
        this.loneliness = this.loneliness - (3 * minutes);
        this.happiness += 5;
    }

    wait = (minutes) => {
        this.tiredness += minutes;
        this.hunger += minutes;
        this.loneliness += minutes;
        this.happiness += minutes;
    }


}



// B) Make Boots wait 20 minutes and call then console.log(boots);

let boots = new Cat("Boots", "Simaese Cat");

console.log(boots.wait(20));
