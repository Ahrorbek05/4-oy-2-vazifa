// 1-masala
// let a = 5;
// if (a > 0) {
//     a++;
// }
// console.log(a);

// 2-masala
// let n = 5;
// if ( n > 0) {
//     n++;
// } else {
//     n -= 2;
// }
// console.log(n);

// 3-masala
// let c = 5;
// if ( c > 0){
//     c++; 
// } if ( c < 0){
//     c -= 2;
// } if ( c == 0){
//     10;
// }
// console.log(c);

// 4-masala
// function countPositiveNumbers(a, b, c) {
//     let count = 0;
//     if (a > 0) {
//         result++;
//     }
//     if (b > 0) {
//         result++;
//     }
//     if (c > 0) {
//         result++;
//     }
//     return result;
// }
// let num1 = 5;
// let num2 = -3;
// let num3 = 0;
// console.log("Kattaroq butun son:", kattaroqButunSon(num1, num2, num3));

// 5-masala
// let negative = 0;
// let positive = 0;
// let a = + prompt("son kiriting");
// if (a > 0) {
//     positive++;
// } else {
//     negative++;
// }
// let b = + prompt("son kiriting");
// if (b > 0) {
//     musbat++;
// } else {
//     negative++
// }
// let c = + prompt("son kiriting");
// if (c > 0) {
//     positive++;
// } else {
//     negative++;
// }

// 6-masala
// Function to determine the larger of two integers
// function kattaroqButunSon(a, b) {
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     } else {
//         return "Ikkisi ham teng";
//     }
// }
// let num1 = 10;
// let num2 = 20;

// let result = kattaroqButunSon(num1, num2);
// console.log("Kattaroq butun son:", result);

// 7-masala
// function kichikSon(num1, num2) {
//     if (num1 < num2) {
//         return 1; 
//     } else if (num2 < num1) {
//         return 2;
//     } else {
//         return 0; 
//     }
// }

// let num1 = 10;
// let num2 = 20;

// let result = kichikSon(num1, num2);

// if (result === 0) {
//     console.log("ikkisi ham teng sonlar.");
// } else {
//     console.log(`kichik raqam ${result}.`);
// }

// 8-masala
// function displayOrderedIntegers(num1, num2) {
//     if (num1 > num2) {
//         console.log(`katta: ${num1}, kichik: ${num2}`);
//     } else if (num2 > num1) {
//         console.log(`katta: ${num2}, kichik: ${num1}`);
//     } else {
//         console.log(`ikkisi ham teng: ${num1}`);
//     }
// }
// let num1 = 10;
// let num2 = 20;

// 9-masala
// function buyurtmaniKorsatish(a, b) {
//     if (a > b) {
//         let temp = a;
//         a = b;
//         b = temp;
//     }
    
//     console.log(`A (kichik son): ${a}, B (katta son): ${b}`);
// }
// let A = 20.5;
// let B = 10.3;

// buyurtmaniKorsatish(A, B);

// 11-masala
// function qiymatlarniYangilash(A, B) {
//     if (A !== B) {
//         const kattaQiymat = Math.max(A, B);
//         A = kattaQiymat;
//         B = kattaQiymat;
//     } else {
//         A = 0;
//         B = 0;
//     }
//     console.log(`A = ${A}, B = ${B}`);
// }

// let A = 5, B = 10;
// qiymatlarniYangilash(A, B);

// A = 7, B = 7;
// qiymatlarniYangilash(A, B);

// 13-masala
// let A = +prompt('A');

// let B = +prompt('B');

// let C = +prompt('C');

// let larger ;

// let normal ;

// let smaller ;

// if (A > B){
// larger = A,smaller = B} else {

// larger = B,smaller = A} if(larger < C){

// normal = larger} else if (C < smaller){

// normal = smaller} else{

// normal = C}

// console.log(normal);

// 14-masala
alert('Sonlarni kiriting!!!')
let a = +prompt('a sonni kiriting');
let f = +prompt('f sonni kiriting');
let n = +prompt('n sonni kiriting');
 if ( a > f ){
    console.log(a);
 } if ( f > a ){
    console.log(f);
 } else console.log(a);{
    console.log(a);
 } 