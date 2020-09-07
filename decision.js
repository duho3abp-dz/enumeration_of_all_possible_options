'use strict';

const arr = ['a', 'b', 'c', 'd', 'e', 'f'],
      arrLength = arr.length;
let newArr = [], skip;

const replaceString = (str) => str.replace(/\-/g, '');

const testArr = (array) => {
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

const iteratingArray = ({array, item, l}) => {
    if (item) {
        const str = replaceString(item);

        if (+str.length < l) {
            array.forEach(el => {

                if (str.length > 1) {
                    for (let i = 0; i < str.length; i++) {
                        if (str[i] === el) {
                            return;
                        }
                    }
                }

                if (item !== el) {
                    const p = `${item}-${el}`,
                          testP = testArr(p);

                    newArr.forEach(element => {
                        if (replaceString(element) == testP) { skip = true; }
                    });

                    if (!skip) {
                        newArr = [...newArr, p];
                        skip = false;

                        iteratingArray({array, l, 
                            item: p
                        });
                    }
                    
                }
                
            });
        } else { return; }

    } else {
        array.forEach(el => {
            newArr = [...newArr, el];
            iteratingArray({array, l, 
                item: el
            });
        });
    }
};

iteratingArray({
    array: arr, 
    l: arrLength
});

console.log(newArr);


// newArr.forEach(itm => {
//     const string = itm.replace(/\-/g, '');
//     let x = 0;

//     for (let i = 0; i < string.length; i++) {
//         array.forEach(elem => {
//             if (string[i] !== elem) {
//                 x++;
//             }
//         });
//     }
//     if(x >= l) {
//         y++;
//     }
// });

// ---------------------RECURSIVE-METHOD---------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let newArr = [];

// const iteratingArray = (array, item) => {
//     if (item) {
//         if (+item.replace(/\-/g, '').length < arr.length) {
//             array.forEach(el => {
//                 const p = `${item}-${el}`;
//                 newArr = [...newArr, p];
//                 iteratingArray(array, p);
//             });
//         } else { return; }
//     } else {
//         array.forEach(el => {
//             newArr = [...newArr, el];
//             iteratingArray(array, el);
//         });
//     }
// };
// iteratingArray(arr);

// console.log(newArr);

// ---------------------NOT-RECURSIVE-METHOD---------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let newArr = [];

// arr.forEach(a => {
//     newArr = [...newArr, a];

//     arr.forEach(b => {
//         newArr = [...newArr, `${a}-${b}`];

//         arr.forEach(c => {
//             newArr = [...newArr, `${a}-${b}-${c}`];

//             arr.forEach(d => {
//                 newArr = [...newArr, `${a}-${b}-${c}-${d}`];

//                 arr.forEach(e => {
//                     newArr = [...newArr, `${a}-${b}-${c}-${d}-${e}`];

//                     arr.forEach(f => {
//                         newArr = [...newArr, `${a}-${b}-${c}-${d}-${e}-${f}`];    
//                     });
//                 });
//             });
//         });
//     });
// });

// console.log(newArr);