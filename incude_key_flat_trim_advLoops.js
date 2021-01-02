// *****.includes() : 괄호 안의 무언가가 포함되어있는지에 대해 검사

let a = "Ahoy!"
a.includes("h") // true

let b = [1,2,3,4,5]
b.includes(2)

// ** : 제곱

2**3 // 8


// ***** .padStart()  padEnd()

let c = "Coca-Cola"

c.padStart(15)  // "      Coca-Cola"
c.padEnd(15)  //   "Coca-Cola      "



// ***** obj.keys .values .entries

let obj = {
    name: "HoushouMarine",
    gen: '3rd',
    age: 17,
}

Object.keys(obj).forEach(a => {
    console.log(a)}
)
// name, gen, age

Object.values(obj).forEach(a => {
    console.log(a)
})
// HoushouMarine 3rd 18


Object.entries(obj).forEach(a => {
    console.log(a)
})
//  ["name", "HoushouMarine"] ["gen", "3rd"] ["age", 17]



// ***** flat()

let d = [1, 2, [3, [4]], 5, 6]
d.flat()  // [1, 2, 3, [4], 5, 6]
d.flat(2) // [1, 2, 3, 4, 5, 6]

let e = d.flatMap(element => element + "!")   // ["1!", "2!", "3,4!", "5!", "6!"]


// ***** trimStart(), trimEnd()

// 더 이상의 자세한 설명은 생략한다


// try, catch  <~ 파이썬에서의 try, except와 비슷
// try 안의 내용물에 에러가 나면 catch 괄호 안의 것을 실행.
 

try {
    abc + "hahaha"
} catch {
    console.log('error')
} // 'error'

// abc는 선언된 적 없는 변수라서 에러가 발생하고 catch안의 것이 실행된다


// Advanced Loops

const basket = ['apple', 'orange', 'grape']

// 1. for of <~ 파이썬에서의 for in ??
for (item of basket) {
    console.log(item);
} // apple, orange, grape


// 2. for in <~ object에서만 사용됨

const detailBasket = {
    apple: 1,
    orange: 2,
    grape: 3
}

for (i in detailBasket) {
    console.log(i);
} // apple, orange, grape


// Question
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
  }
// ans  
  function checkBasket(basket, lookingFor) {
    let ans = false;
    for (i in basket) {
      (lookingFor === i) ? ans = true : ans = ans;
    }
    return ans
  }