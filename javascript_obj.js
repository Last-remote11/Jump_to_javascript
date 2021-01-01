// **********************reference type*************************

// primitive type : 불리언, 숫자, null, undifined, 문자열
// primitive type이 아닌 경우에는 프로그래밍 언어로 정의되지 않고 reference type이 됨
var obj1 = { value : 10 };
var obj2 = obj1;  
// 이 경우 obj1이 primitive type이 아니기 때문에
// obj2는 프로그래밍 언어로 정의되지 않고 단지 참조만 함
var obj3 = { value : 10 };

obj1 === obj2 // true

obj1 === obj3 // false

// 참조할 경우 참조 관계에 있는 것중에 하나가 바뀌면 참조하는 모든 변수가(obj2) 바뀜
obj1.value = 15

console.log(obj2.value) // 15
console.log(obj3.value) // 10


// 반대로 변수를 primitive type으로 정의하면 참조를 안함
var a = "Ahoy!"
var b = a
var c = "Ahoy!"

a === c // true
b === c // true

var a = "Hi"
console.log(b) // "Ahoy!"


// object를 참조하지 않고 복사하고싶다면
let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj);
// 혹은 더 간단하게
let clone2 = {...obj}
// 이러면 obj를 변경해도 obj2는 영향을 받지 않음.


// object 안의 object는..?
let obj = {a: 'a', b: 'b', c: {deep : "something deep"}}
let obj2 = {...obj}

obj.c.deep = 'hahahahaha'

console.log(obj, obj2) // 복사했음에도 불구하고 둘 다 c 안의 obj가 같아짐
// 첫번째 layer만 복사하고 안에있는 obj는 다른 메모리에 저장되어서 참조를 하게 됨


// 안에 있는 object까지 복사하고싶으면
let superClone = JSON.parse(JSON.stringify(obj))



// ********************** context vs scope **********************

console.log(this) // Window { ....... }

const obj4 = {
    a: function() {
        console.log(this);
    }
} // {a: f}


//**********************instantiation**********************
//instantiation : 하나의 금형에 녹인 재료를 부어 무한히 만드는 것과 같이
// 객체의 구조를 정의한 다음에 그것을 사용하여 인스턴스를 무한히 만드는 것
// constructor = 파이썬에서의 __init__?
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, i'm a ${this.type}`);
    }
}

// 클래스를 오버라이딩하려면 extend 사용
// 오버라이딩하려는 원래 클래스의 변수에 접근하려면 super()를 사용
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer")
const wizard2 = new Wizard("Jack", "Dark Wizard")

console.log(wizard1) // Wizard {name: "Shelly", type: "Healer"}
wizard1.play() // "I'm a Healer"