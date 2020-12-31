// scope

var a = "hello"

function q1() {
    var a = "hi"; // 여기서의 var은 함수 내에서만 유효. Root scope에 영향을 미치지 않음
    console.log(a); // "hi"
}
console.log(a) // "hello"

function q2() {
    a = "bye";
    console.log(a); // "bye"
}
console.log(a); // "bye"


let b = "Ahoy!"

function q3() {
    let b = "hi"; 
    console.log(b); // "hi"
}
console.log(b) // "Ahoy!"

function q4() {
    b = "bye";
    console.log(b); // "bye"
}
console.log(b); // "bye"


//  ?와 :

let hoho
let haha = true

function enterCheck() {
    if (haha) {
        console.log("access")
    } else {
    console.log("access denied")
    }
}
// (value) ? (value가 ture일 때) : (value가 false일 때)
var enterCheck2 = haha ? "access" : "access denied";


// switch와 case

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you encounter gold";
            break;
        default:
            whatHappens = "please enter a valid direction";
            
    }
    return whatHappens;
}


// object를 동적으로 만드는 것도 가능

let a = "ddd"
let b = "ccc"

const obj = {
    name: "houshou marine",
    age: 17,
    [a+b]: 'hi'
};
// obj = {name: "houshou marine", age: 17, dddccc: "hi"}


// Destructering
const Son = {
    age: 28,
    height: 183,
    weight: 77,
    team: "tottenham"
}

let age = Son.age;
let height = Son.height;
let weight = Son.weight;
let team = Son.team;
// 이렇게 하는 대신 간단하게 아래의 방법도 가능
let {age, height, weight, team} = Son



const alpha = "123";
const beta = "456";
const gamma = "789";

const obj3 = {
    a: a,
    b: b,
    c: c
}
// 이렇게 하는 대신 간단하게 아래의 방법도 가능2
const obj3 = {a, b, c}


//Template strings

const sayHello = "Ahoy " +  alpha + " hi " + beta + " ! " + gamma + " ..."

const sayHelloTemplete =  `Ahoy ${alpha} hi ${beta} ! ${gamma} ...`


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); // 뭔가 고유한 것을 만들고 싶을 때 사용

sym2 === sym3 //false


// *** Arrow function ***

function add(a,b) {
    return a + b;
}

const add2 = (a, b) => a + b

let whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost!"