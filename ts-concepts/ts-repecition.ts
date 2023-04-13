// basic data types

let randomNumber: number = 10;
let randomString: string = 'I am string';
let isCompleted:boolean = false;
let nothing: null | string = null;
let un: undefined = undefined;

// function without return - void

const randomFunction = (): void => {
    console.log('I am function without return method');
}

// array

let listOfNumbers: number[] = [20, 30, 40];

let listOfString: Array<string> = [
    "Hello",
    "TypeScript"
]


// tuple types

let firstArray: [string, number];

firstArray = ["String", Math.random()];

let y: [string, number] = ['Second string', 100];


let listOfUser: object[] = [
    {id: 1, name: "Name"},
    {id: 2, name: "Surname"}
]


// any

let anyArray: any[] = [1, "fgfg", true];


// enum


enum Actions {
    Up, Down, Left, Right
}


// Actions.Up --- 0
// Action.Down --- 1

enum Cars {
    BMW = 100,
    AUDI = 101,
    LEXUS // 102, because audi has 101
}

const returnNumberOfCar = () => {
    return Cars.LEXUS
}

// never type


// infinity function or function which returns error

const message = 'Message'

const waitForMessage = (message: string): never => {
    throw new Error(message)
}

const infinityLoop = (): never => {
    while (true) {
        console.log('Infinity message')
    }
}

// Object type

let hashAboutPerson: object = {
    name: 'His/her name'
}


// Type

type Name = string;

let myName: Name = "";

myName = "Aleksy"


// More about Enums


enum keysOfBoard {
    leftArrow, 
    rightArrow
}

// leftArrow[0]
// keysOfBoard.rightArrow

enum Links {
    youtube = "url",
    linkedin = 'url'
}

let someNumbers: number[] = [
    1,2,3,4,5,6,7,8
]

const enum Types {
    String = "",
    Number = 10
} // it doesnt go in a result bandle, because has const, but:

let arrayOfTypes: any[] = [Types.String, Types.Number] // it will go to result


// More About Function


const createPass = (name: string, age: number | string) => `${name} ${age}`.trim();

// age is in this example optional argument age?:

const createEmail = (name: string, age?: number | string): string => `${name} ${age}`.trim();

// Rest args

const createImage = (name: string, ...attributes: Array<string>): string => `My name is ${name}, ${attributes.join(" ")}`

// console.log('Patrick', "I", "am", "a", "dog")

const generateRandomNumber = (arrayWithNumbers: number[]): string => {
   return `Random number from array is ${arrayWithNumbers[Math.floor(Math.random() * arrayWithNumbers.length)]}`
}

// console.log([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)

const voidFunction = (options: object): void => {
    let arrayOfUsers = JSON.parse(localStorage.getItem('users')!);
    arrayOfTypes.push(options);
}

const infinityFunc = ():never => {
    while(true){}
}

let tFunc: (firstArg: string) => void

function getUser(key: string):void {
    //....
}

tFunc = getUser;


// More about object


let randomUserAny: any = {
    name: "", 
    age: null
}

type Person = {
    name: string, 
    age: number,
    nickName: string,
    getPass?: () => string
}

let randomUserWithTypes: Person = {
    name: "",
    age: 100,
    nickName: "NickNAME"
}

let admin: Person = {
    name: "",
    age: 1000,
    nickName: "Aleksy",
    getPass(): string {
        return `${this.name} ${this.age}`;
    }
}


type Countires = {
    capital: string, 
    landscape: string,
    age: number,
    people: number,
    army?: Array<object>,
    language: string,
    saySomething?: () => string
}

let Poland: Countires = {
    capital: 'Warszawa',
    age: 1500,
    landscape: 'normal',
    people: 400000000,
    army: [
        {id: 1, rank: 'Soldiers'},
        {id: 2, rank: 'General'}
    ],
    language: "polish",
    saySomething(): string {
        return `${this.language}`
    }
}

let Vatican: Countires = {
    capital: 'Vatican',
    age: Math.random() * Math.random(),
    landscape: 'speicial',
    people: 100000,
    language: 'English'
}


// classes


// class User {

//     public name: string; // all
//     protected age: number; //nobody
//     private nickName: string; // only children
//     readonly pass: number; // only for read

//     constructor (name: string, age: number, nickName: string, pass: number) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//         this.pass = pass;
//     }

//     // second variant 
//     // constructor(public name: string, protected age: number, private nickName: string, readonly pass: number)

//     generatePass(): string {
//         return `${this.name} ${this.pass}`
//     }

    
// }


// const aleksy = new User('Aleksy', 20, 'React developer', 1000)

class Admin {
    private pass: number = 9999

    constructor(public name: string) {}
    

    setPass (pass: number) {
        this.pass = pass;
    }

    set myPass(pass: number) {
        this.pass = pass;
    }
}

const admin1 = new Admin('Aleksy')


// class UserOfApp {
//     private nickName: string = 'apper'
//     static secret = 12345;

//     constructor(public name: string, public age: number) {
//     }

//     getPass(): string {
//         return `${this.name} ${UserOfApp.secret}`
//     }
// }

// const john = new UserOfApp('John', 24)

// class Mary extends UserOfApp {
//     name: string = 'Mary';

//     constructor(age: number) {
//         super(name,age)
//     }
// }

// const mary = new Mary(25)


// class User {
 
//     private nickName: string = 'webDev';
//     static secret = 12345; 

//     constructor(public name: string, public age: number) {}

//     getPass(): string {
//         return `${this.name}${User.secret}`;
//     }

// }

// const max = new User('Max', 20);

// // Personal method in inherited class
// class Yauhen extends User {

//     name: string = 'Yauhen';

//     constructor(age: number) {
//         super(name, age);
//     }

//     getPass(): string {
//         return `${this.age}${this.name}${User.secret}`;
//     }

// }

// const yauhen = new Yauhen(31);


abstract class User {
 
    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}`;
    }

}

// Namespaces & modules

namespace Utils {
    export const someText : string = ""
}

// import {someText} from './Utils'


// Type Interface


interface UserPerson {
    readonly name: string, // block changes
    age: number,
    [propName: string]: any
} // for objects


const alesky20: UserPerson = {
    name: 'Aleksy',
    age: 20,
    text: ''
}

// class Aleksy implements User, ..... {
//     name: string = 'aleksy'
// }


// interface AdminPerson extends UserPerson {
//     getPass () : string
// }


// // Generic

// function identity<T>(arg: T): T {
//   return arg;
// }


// class UserPop<T, K> {

//     constructor(public name: T, public age: K) {}

//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }

// }

// const yauhen = new UserPop('Yauhen', '31');	// string, string
// const max = new UserPop(123, 321);				// number, number
// const leo = new UserPop('Leo', 22);


class Tree<T> {
    constructor(public name: T, public size: T) {

    }
}

const firstTree = new Tree('Tree', "2000")
const secondTree = new Tree('Tree 2', "3000")



// Decorators


// const logClass = (constructor: Function) => {
//     console.log(constructor)
// }

// @logClass
