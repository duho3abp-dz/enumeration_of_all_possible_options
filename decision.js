'use strict';

// ---------------------RECURSIVE-METHOD---------------------

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let newArr = [];

const iteratingArray = (array, item) => {
    if (item) {
        if (+item.replace(/\-/g, '').length < arr.length) {
            array.forEach(el => {
                const p = `${item}-${el}`;
                newArr = [...newArr, p];
                iteratingArray(array, p);
            });
        } else { return; }
    } else {
        array.forEach(el => {
            newArr = [...newArr, el];
            iteratingArray(array, el);
        });
    }
};
iteratingArray(arr);

console.log(newArr);

// ---------------------NOT-RECURSIVE-METHOD---------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let newArr = [];

// arr.forEach(a => {
//     arr.forEach(b => {
//         arr.forEach(c => {
//             arr.forEach(d => {
//                 arr.forEach(e => {
//                     arr.forEach(f => {
//                         newArr = [...newArr, `${a}-${b}-${c}-${d}-${e}-${f}`];    
//                     });
//                     newArr = [...newArr, `${a}-${b}-${c}-${d}-${e}`];
//                 });
//                 newArr = [...newArr, `${a}-${b}-${c}-${d}`];
//             });
//             newArr = [...newArr, `${a}-${b}-${c}`];
//         });
//         newArr = [...newArr, `${a}-${b}`];
//     });
//     newArr = [...newArr, a];
// });

// console.log(newArr);