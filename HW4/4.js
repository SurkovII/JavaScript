"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/
let str = '';
const simbol = '*';
for (let i = 0; i < 21; i++) {
    for (let j = 0; j < i; j++) {
        str += simbol;
    }
    console.log(str);
    str = '';
}