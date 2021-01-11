el.addEventListener("click", submitForm);

// Promise : 미래에 언젠가 하나의 value를 생산 혹은 reject(+reject된 이유)
// fulfiled, rejected, pending 세 가지 상태를 가wla
// producing과 consuming code로 나뉘어진다.
// fetch도 사실 promise이다
// new Promise 등으로 새로 만들 수 있고(producing) .then으로 실행시킨다.(consuming)


// 기존의 방법대로 콜백을 사용했을 시
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function() {
            });
        });
    });
});

// promise를 사용하면 아래와 같이 됨

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// Promise는 resolve와 reject 두 개의 파라미터를 가진다

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error it broke')
    }
})

promise.then(result => console.log(result))

promise.then(result => result + '!')
    .then(result2 => {console.log(result2)
        ;}) // Stuff Worked!


promise.then(result => result + '!')
    .then(result2 => {
        throw Error 
        console.log(result2)
        ;})
    .catch(() => console.log('error!'))


promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        throw Error;
        console.log(result + '!');
    })

// catch가 작동하지 않음


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'));




// async와 await는 promise를 좀 더 사용하고 읽기 쉽게 만들어줌

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))



async function playerstart() {
    const firstmove = await movePlayer(100, 'Left');
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json()
    console.log(data)
}


// 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

async function fetchMultiple() {
    const jsons = await Promise.all(urls.map(url => fetch(url).then(x => x.json())
    ))
    jsons.forEach(x => console.log(x))
}

const getData = async function() {
    const[users, posts, albums] = await Promise.all(urls.map(url => 
        fetch(url).then(resp => resp.json())
        ))
    console.log(users);
    console.log(posts);
    console.log(albums);
}