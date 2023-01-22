// let myNymber: number = 2

// let isActive : boolean = true;

// let n : null = null;

// let str : string = 'www'

// // // const valid = (): void => {

// // // }

// // function valid () : void {
    
// // }

// str = 'aaa'


// Массивы


let list : number[] = [1,2,3] // говорим, что массив будет состоять из чисел

let strings : string[] = [
    "aaa",
    'bbb',
    'ccc', 
]

let objectsArray : Array<object> = [
    {"code" : 1, "url": "url" },
    {"code" : 2, "url": "url" },
    {"code" : 3, "url": "url" },
]

let list2: Array<number> = [1,2,3] // generic type

// если массив элементы массива - это разные типы данных

let x: [string, number]; // по порядку описываем типы элементов в массиве

x = ['ddd', 999]

let y : [string, number, boolean, null, undefined];

y = ['ttt', 10, true, null, undefined];


// второй способ

let c : [string, number] = ['hello', 1000];


// тип данных any 

// гласит о том, что можно спокойной изменять значение переменной на другой тип данных

let anyType : any = 'string';

anyType = true;


// тип данных enum

// enum Directions {
//     Up, Down, Left, Right
// }

// можно использовать для создания именованных числовых const

enum Directions {
    up = 2,
    down = 4, 
    left = 6, 
    right // 7
}

// тип данных never

// может использоваться когда функция возвращает ошибку
// так же когда функция выполняется


const mgs = 'hello'

const error = (msg : string) : never => {
    throw new Error(msg)
}

const infiniteLoop = (): never => {
    while(true) {

    }
}

// то есть говорит о том, что функции не дадут результат


// тип object

const create = (obj: object | null): void => {}

let hash : object = {
    name: "name",
    age: 2
}

// create(1) // error
create({name: 'Aleksy'})

let multipleVariable : string | number;

multipleVariable = 10;
multipleVariable = 'string'

// Type


// с его помощью можно создавать кастомные типы данных 

type Name = string;

let id : Name;

id = '99';



// Подробнее о типе данных enum


// cмесь массива и объекта, при обращении к нему возвращается его index


enum Variable {
    Let,
    Const, 
    Var
}

Variable[0] // Let

// значение здесь - это Let, Const, Var. Через = можно указать index элементов. Если у какого-то элемента
// нет index, то он зависет от предыдущего. По умолчанию счёт index идёт с нуля


enum Cars {
    Audi = 2,
    BMW = 4, 
    Subaru = 6,
    Jaguar
     
}

Cars.Audi // 2
Cars.BMW // 4

const enum links {
    youtube = "url"
}

const arr = [links.youtube];

// функции

const createPassword = (name : string, age : number) : string =>  `${name} ${age}`

// указываем тип аргументов. если аргумент может иметь не один тип, используем оператор или |


// optional argument surname

const createUserName = (name : string, age? : number) : string  => `${name}`

// можно использовать ?, говорит о том, что если мы вдруг забыли передать аргумент age при вызове


// Rest - остаточные параметры, ...prev

const createSkills = (name : string, ...skills : Array<string>) : string => {
    return `${name} ${skills.join()}`
}

// итог по функциям
// void - если функция ничего не возвращает
// если функция вернёт ошибку или выполняется постоянно - never


// Типы функции

let newFunc : (firstArg : string) => void;

function oldFunc (name: string) : void {
    alert("HELLO" + name)
}

newFunc = oldFunc;


// типизация объектов

// any - позволяет изменять типы данных (плох)

let user : any = {
    name: "Aleksy",
    age: 30
}

user = "test"

let newUser : {name: string, age: number, nickName : string} = {
    name: "Aleksy",
    age: 20,
    nickName: 'React'
}

let oldUser : {name: string, age: number, nickName : string} = {
    name: "Viet",
    age: 20,
    nickName: 'Angular'
}


// группировка объектов, избежания DRY
// если мы имеем зрительно одинаковые объекты, чтобы не повторяться, мы можем создать с помощью 
// Type кастомный тип данных

type Person = {name: string, age: number, nickName? : string, getPass? : () => string}

let updatedNewUser : Person = {
    name: "Aleksy",
    age: 20,
    nickName: 'React',
}

let updatedOldUser : Person = {
    name: "Viet",
    age: 20,
    nickName: 'Angular'
}

let currentUser : Person = {
    name: "Viet",
    age: 20,
    getPass () : string {
        return ``                  // пример с optional properties
    } 
}


// Классы 

class User {

    // свойства приватные и публичные
    // public, private, protected, readonly

    // public - значение по умолчанию
    // private - не может быть доступен за пределами класса
    // protected - доступ могут получить только наследники
    // readonly - доступен только для чтения
     
    public name: string;
    private age: number;
    protected nickName: string;
    readonly pass: number;

    // можно задать default values, например, name : string = 'EEE'

    constructor (name: string, age: number, nickName: string, pass : number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

    // можно минимизировать внешний вид класса:

    // constructor (
        // public name : string;
        // public age : number
    // ) {

    setAge (age : number) {
        this.age = age;
    }

    set myAge(age : number) {
        this.age = age;
    }

}


let aleksy = new User('Aleksy', 19, "React Developer", 999);

aleksy.setAge(30);  // вызов метода
aleksy.myAge = 31;  // вызов свойства

// aleksy.name - Aleksy
// aleksy.nickName - is private prop
// aleksy.age - props is protected
// aleksy.pass - props is readonly

// aleksy - {name: 'Aleksy', age: 19, nickName: 'React Developer}

// чтобы изменять значение приватного свойства класса, можно создав нужные методы(2 способа)


// Наследование 

class Human {

    private NickName : string = 'React developer'
    static secret = 9999;

    constructor (public name : string, public age : number) {
        this.name = name;
        this.age = age
    }

    getPass() : string {
        return `${this.name} `
    }
}

// class Aleksy extends Human {

//     name : string = 'Aleksy'

//     constructor (age : number) {
//         super(name, age)
//     }


// }

// const human = new Human("Human", 99);

// const aleksy1 = new Aleksy(19);


// abstract classes

// в ts - это базовый класс, от которого наследуются другие.
// cодержит детали реализации своих свойства и методов
// используется только для создания наследников

// abstract class Animal {

//     constructor(public leg : number, public name : string) {
//         this.name = name;
//     }

//     greet () : void {
//         console.log(this.name)
//     }

//     abstract voice () : string; 
// }

// let animal = new Animal(2, "Animal")

// class Tiger extends Animal {
    
//     name : string = 'tiger';

//     constructor() {
//         super(leg, name);
//     }

// }

// let tiger = new Tiger()



// Пространство имён и модули

namespace Utils {
    export const SECTER : string = '0000';

    export const createUser = () : void => {
        
    }
}

const dsfsdf = Utils.createUser


// интерфейсы 

interface Man {
    name: string, 
    age?: number,
    [propName : string] : any
}

// помогает описать как должен выглядеть объект


const alex : Man = {
    name: "Aleksy"
}

interface pass {
    getPass () : string 
}

// имеет readonly - только для чтения

// class + interface

class Me implements Man, pass {
    name: string = 'FSSDF'

    getPass () {
        return `${this.name}`
    }
}


// generic - общие типы

// const getter = <T>(data : T) : T => data;

// getter<number>(10)


// Декораторы 

// - это обычная функция, может прикрепленна к классу и тд.



// const logClass = (constructor : Function) => {
//     console.log(constructor)
// }

// const logPropetry = (target: Object, propertyKey: string | symbol) => {
//     console.log(propertyKey)
// }

// @logClass
// class Car {

//     @logPropetry
//     secret : number

//     constructor (public name : string) {}
// }
