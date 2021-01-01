const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc(); // alert("hi")

// Closures - 함수는 한번만 실행되고 반복되어 실행되지 않음.
// 자식 scope는 부모 scope에 접근 가능하지만 반대로 부모scope가 자식scope의 변수에는 접근할 수 없음
// 위의 예에서 second함수는 greet라는 변수를 사용하는데,
// 부모 scope(first함수) 안에 있는 greet 변수에 접근이 가능


// Curring
// 함수 안의 함수를 실행하면 뒷부분 함수만 return함

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3); // (b) => a * b
curriedMultiply(3)(5); // 15

// 변수를 하나만 주면 함수를 불러오고 변수를 하나 더 주면 뒤따라 오는 함수에 두번째 변수를 넣어 값을 계산

// 사용예
// 하나의 변수만 넣으면 5를 곱해주는 함수를 만들어줄 수 있음
const multiplyBy5 = curriedMultiply(5);

multiplyBy5(4); // 20


// Compose
const compose = (f, g) => (a) => f(g(a));

// f도 함수, g도 함수
const sum = (num) => num + 1;

compose(sum, sum)(5); // 5 + 1 + 1 = 7


// Avoiding Side Effects, Functional Purity.

// Side effect : 함수 내에서 함수 바깥의 것들에게 영행을 주는 것
// 함수는 자신만의 universe처럼 다루어야 하므로 side effect는 지양해야 함
// Functional Purity : 함수의 Side effect를 배제하고 반드시 어떤 것을을 return하도록 만드는 것(undefined X)
// Deterministic : 함수에 같은 값을 넣으면 할상 같은 결과가 return되어야 함
var a = 1;
function b() {
    a = 2;
}