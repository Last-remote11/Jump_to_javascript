const array = [1, 2, 10, 12];

const triple = []
const newArray = array.forEach((num) => {
    triple.push(num * 3);
})

console.log(triple);


// map, filter, reduce

// map은 반드시 값을 return
// forEach를 사용하면 새 array를 만들고 그 안에 push를 해주어야 하지만 map은 그럴 필요가 없음
const double = array.map(n => n * 2); 
console.log(double) // [2, 4, 20, 24]


// filter

const filterArray = array.filter(n => n > 5);
console.log(filterArray); // [10, 12]


// reduce : 누적합, 누적차? 를 계산할 때 사용

const reduceArray = array.reduce((acc, n) => {
    return acc - n
}, 0)
console.log(reduceArray) // 25 (1+2+10+12)

const array2 = [175, 50, 25];
const reduceArray2 = array2.reduce((total, n) => total - n);
console.log(reduceArray2); // 100