'use strict';

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let newArr = [];

arr.forEach(a => {
    arr.forEach(b => {
        arr.forEach(c => {
            arr.forEach(d => {
                arr.forEach(e => {
                    arr.forEach(f => {
                        newArr = [...newArr, `${a}-${b}-${c}-${d}-${e}-${f}`];    
                    });
                    newArr = [...newArr, `${a}-${b}-${c}-${d}-${e}`];
                });
                newArr = [...newArr, `${a}-${b}-${c}-${d}`];
            });
            newArr = [...newArr, `${a}-${b}-${c}`];
        });
        newArr = [...newArr, `${a}-${b}`];
    });
    newArr = [...newArr, a];
});

console.log(newArr);