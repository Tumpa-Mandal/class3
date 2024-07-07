

//Mandatory Tasks:01

// Global Context:

function hellothis(){
    console.log(this);  // Output:Window object
}

hellothis();



// Object Method:

const myCustomObj = {
    name: 'Tumpa',
    age:25,
    job:'Student',
    msg:function(){
        console.log(this);
    }
}

myCustomObj.msg(); //Output:{name: 'Tumpa', age: 25, job: 'Student', msg: ƒ}


// Constructor Function:

function Person(name,age){
   this.name = name;
   this.age = age; 
}

const person1 = new Person("Tumpa",25);
console.log(person1.name); //Output:Tumpa
console.log(person1.age);//Output:25


// Class Context:

class PersonA{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`My name is ${this.name} and i'm ${this.age} Years old`);
    }
}

const person2 = new PersonA('Tumpa',30);
person2.greet(); //Output:My name is Tumpa and i'm 30 Years old


//Mandatory Tasks 02:

function calculateArea() { 
    return this.width * this.height; 
 } 
 
 // Object 1 
 const rectangle = { 
    width: 10, height: 20 
 }; 
 
 // Object 2 
 const square = { 
    width: 15, height: 15 
 };

// Using call 
const rectangleAreaCall = calculateArea.call(rectangle);
console.log(rectangleAreaCall); // Output: 200

// Using bind 
const calculateRectangleArea = calculateArea.bind(rectangle);
const rectangleAreaBind = calculateRectangleArea();
console.log(rectangleAreaBind); // Output: 200

// Using call 
const squareAreaCall = calculateArea.call(square);
console.log(squareAreaCall); // Output: 225

// Using bind 
const calculateSquareArea = calculateArea.bind(square);
const squareAreaBind = calculateSquareArea();
console.log(squareAreaBind); // Output: 225


//Mandatory Tasks 03:

// Constructor function

function User(name,email){
    this.name = name;
    this.email = email;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(`${this.name} is now online.`);
};

User.prototype.logout = function(){
    this.online = false;
    console.log(`${this.name} is now offline.`);
};

const user1 = new User('Zohan', 'zohan@example.com');
user1.login(); // Output: Zohan is now online.


// Class

class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.online = false;
    }

    login() {
        this.online = true;
        console.log(`${this.name} is now online.`);
    }

    logout() {
        this.online = false;
        console.log(`${this.name} is now offline.`);
    }
}

const user3 = new User('Zohan', 'zohan@example.com');
user1.login(); // Output: Zohan is now online.