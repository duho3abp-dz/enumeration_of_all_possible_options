'use strict';

// ---------------------RECURSIVE-METHOD---------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'],
const arr = ['a', 'b', 'f', 'i', 'w'],
      arrLength = arr.length;
let newArr = [],
    i = 0,
    pass = false,
    repeat = false;

const replaceString = (str) => str.replace(/\-/g, '');

const passTest = (ar, it) => {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === it) { pass = true; }
    }
};

const arrTest = (array) => {
    const clearArr = replaceString(array);
    let newArray = [],
        test = '';

    arr.forEach((str, item) => {
        for (let i = 0; i < clearArr.length; i++) {
            if (clearArr[i] === str) {
                newArray[item] = clearArr[i];
            }
        }    
    });
    
    newArray = newArray.filter(itm => itm);
    if (newArray.length > 1) {
        newArray.forEach(w => test += w);
    }

    return test;
};

const iteratingArray = (array, str) => {
    if (str) {
        if (replaceString(str).length < arrLength) {
            array.forEach(item => {
                if (str !== item) {
                    passTest(str, item);

                    if (!pass) {
                        const p = `${str}-${item}`;
                        arrTest(p);
                        newArr.forEach(itm => { if (replaceString(itm) === arrTest(p)) { repeat = true; } });

                        if (!repeat) {
                            newArr[i] = p;
                            i++;
                            pass = false;
                            repeat =false;
                            iteratingArray(arr, p);
                        }

                        repeat =false;
                    }

                    pass = false;
                }
            });
        }
    } else {
        array.forEach(item => {
            newArr[i] = item;
            i++;
            iteratingArray(arr, item);
        });
    }
};
iteratingArray(arr);

console.log(newArr);