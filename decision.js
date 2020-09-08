'use strict';

// ---------------------RECURSIVE-METHOD---------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'],
const arr = ['a', 'b', 'f', {alias: 'i'}, 'w'],
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

const strTest = (string, array) => {
    const clearArr = replaceString(string);
    let newArray = [],
        test = '';

    array.forEach((str, item) => {
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

const arrTest = (array) => {
    let clearArr = [];

    array.forEach(item => {
        switch (typeof item) {
            case 'string':
                clearArr = [...clearArr, item];
                break;

            case 'object':
                for (let key in item) {
                    clearArr = [...clearArr, item[key]];
                }
                break;
        
            default:
                break;
        }
    });

    return clearArr;
};

const iteratingArray = (array, str) => {
    if (str) {
        if (replaceString(str).length < arrLength) {
            array.forEach(item => {
                if (str !== item) {
                    passTest(str, item);

                    if (!pass) {
                        const p = `${str}-${item}`;
                        strTest(p, array);
                        newArr.forEach(itm => { if (replaceString(itm) === strTest(p, array)) { repeat = true; } });

                        if (!repeat) {
                            newArr[i] = p;
                            i++;
                            pass = false;
                            repeat =false;
                            iteratingArray(array, p);
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
            iteratingArray(array, item);
        });
    }
};

iteratingArray(arrTest(arr));

console.log(newArr);