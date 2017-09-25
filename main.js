/*
author:zj@w3313003
time:2017-9-26
*/


//去重
export function unique(arr) {
    let obj = {},
        resultArr = [];
    for (let i of arr) {
        if (!obj[i]) {
            obj[i] = true;
            resultArr.push(i);
        };
    };
    return resultArr;
};


//洗牌数组
export function shuffle(arr) {
    let shuffleArr = arr.slice();
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    for (let i = 0; i < shuffleArr.length; i++) {
        const randomNum = random(0, i),
            num = arr[i];
        shuffleArr[i] = shuffleArr[randomNum];
        shuffleArr[randomNum] = num
    };
    return shuffleArr;
};

//并集
export function interSectionSet() {
    return unique([...arguments].reduce((q, c) => {
        if (!q instanceof Array) {
            throw new Error('参数必须是数组');
            return;
        };
        return [...q, ...c]
    }));
}

//交集
export function unionSet() {
    let arr = [];
    [...arguments].reduce((q, c) => {
        if (!q instanceof Array) {
            throw new Error('参数必须是数组');
            return;
        };
        let _arr = unique(q),
            _nextarr = unique(c);
        _arr.forEach(v => {
            _nextarr.includes(v) ? arr.push(v) : ''
        });
        _nextarr.forEach(v => {
            _arr.includes(v) ? arr.push(v) : ''
        });
    });
    return unique(arr);
}

//差集
export function diffSet() {
    let arr = [];
    [...arguments].reduce((q, c) => {
        if (!q instanceof Array) {
            throw new Error('参数必须是数组');
            return;
        };
        let _arr = unique(q),
            _nextarr = unique(c);
        _arr.forEach(v => {
            _nextarr.includes(v) ? '' : arr.push(v)
        });
        _nextarr.forEach(v => {
            _arr.includes(v) ? '' : arr.push(v)
        });
    });
    return unique(arr);
}



