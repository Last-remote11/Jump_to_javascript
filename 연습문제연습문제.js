function clean(array) {
    array.sort(function(a, b) {a - b});

    let counter = 0; // counter = 중복된 숫자의 길이
    array.forEach(function(num, i) {
        if (array[i] === array[i+1]) {
            counter++
        }
        else if (array[i] !== array[i+1] && array[i] === array[i-1]) {
            array[i - counter] = array.slice(i - counter, i + 1);
            counter = 0;    
        }
    });
        
    array.forEach(function(num, i) {
        while (array[i][0] && arr[i][0] === arr[ind + 1]) {
            array.aplice(ind + 1, 1);
        }
    });
    return array
}


function q2(arr, targetNum) {
    let ans = []
    for (var i = 0; i < arr.length - 1; i++) {
        let a = arr[i];
        for (j of arr.slice(i + 1, arr.length)) {
            if (a !== j && a + j === targetNum) {
                ans.push(a);
                ans.push(j);
            }
        }
    }
    return ans;
}