// pre decreament
// let a  = 5;
// --a
// document.write(a);

// let b = 8;
// let c = 7;
// let result = --b + c-- - b + --c;
//             // 7 + 7   - 7 +   5
// document.write(result);


let d = 10;
let f = 12;
let result = ++d - f-- + d - ++f - ++d + ++f;
        //   11 -  12  + 11 - 12 -  12 + 13
        //   11 - 23   -12 - 25
        //   -12 -12 -25
        
document.write(result);