// ES2020


// ------------BigInt------------

typeof 1 // "number"
typeof 'Ahoy' // "string"
typeof 1n // "bigint"


// 자바스크립트에는 MAX_SAFE_INTEGER이라는 2^53 - 1 이라는 숫자가 있다
// 숫자가 이걸 넘어가면 계산이 맛이 가버림

let x = 2**53 + 1
console.log(x === x + 1) // false가 나와야 할 것 같은데 true가 나옴


// bigint는 MAX_SAFE_INTEGER 보다 더 큰 숫자를 다루고 싶을 때 사용한다.

console.log(9007199254740991n + 10n) // <~ 정상적으로 작동함

undefined


// ------------optional chaning operation ?------------

let holoLive = {
    usadaPekora : {
        species: 'rabbit',
        height: 160,
        age: 27
    }
}

let age;
if (holoLive && holoLive.houshouMarine && holoLive.houshouMarine.age) {
    let age = holoLive.houshouMarine.age;
    console.log(age);
} else {
    let age = undefined;
    console.log(age);
}

// 위의 방법 대신 아래의 방법을 사용
let age = holoLive?.houshouMarine?.age ;
console.log(age);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) => acc.concat(array), []
);