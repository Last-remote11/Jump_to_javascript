// object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40,
}



const objectSpread = (p1, p2, p3) => {
    console.log(p1);
    console.log(p2);
    console.log(p3);
};

const { tiger, lion, ...rest} = animals;

objectSpread(tiger, lion, rest)



// finally
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
}))
    .then(array => {
        // throw Error;
        console.log(array[0]);
        console.log(array[1]);
        console.log(array[2]);
        console.log(array[3]);
    })
    .catch(err => console.log('error!', err))
    .finally(() => console.log('extra'))

    // 만약 catch로 인해 에러가 잡혀 중단되어도 finally는 실행됨
    // promise가 resolve되든 reject되든 결과를 반환



// for await of

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {

    try{
        const [ users, posts, albums] = await Promise.all(
            urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albuns', albums);
    } catch(err) {
        console.log('oops!',err)
    }
}

const loop = (url) => {
    for (url of urls) {
        console.log(url)
    }
}

// 여러 개의 promise를 loop하면서 실행 가능

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}


// allSettled()

const promise1 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000))
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 2000))

// Promise.all 은 모든 promise가 전부 resolve 되어야 한다는 단점이 있다.

Promise.all( [promise1, promise2] ).then(data => console.log(data))
    .catch(e => console.log('something failed', e));


// Promise.allSettled 는 각각의 promise의 상태를 알려줌

Promise.allSettled( [promise1, promise2] ).then(data => console.log(data))
    .catch(e => console.log('something failed', e));

// 0: {status: "fulfilled", value: undefined}
// 1: {status: "rejected", reason: undefined}
// length: 2
// __proto__: Array(0)