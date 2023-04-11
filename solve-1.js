// problem solve 1
/*for (var i = 1; i <= 10; i++){
    document.write(i)
}

//problem solve 2
for (var i = 1; i <= 100; i += 5){
 document.write(i)
}*/

//problem solve 3

// for (var i = 1; i <= 10; i++){
//     var row = "7*" + i + " = " + 7 * i;
//     console.log(row);
// }
//problem solve 4


// for (var i = 1; i <=10; i++){
//     printTable(i);
 
// }
// function printTable(n){
//     for (var i = 1; i <= 5; i++){
//         var row =  n + " * " + i + " = " + n * i;
//     document.write(row ,"<br/>");
// }
// }

//problem solve 5 Calculate the sum of numbers from 1 to 10
//  var sum = 0;

//  for (var i = 1; i <=5; i++){
//     sum += i;
//  }
//  console.log(sum);

 //problem solve 6  Calculate 10!
// var prod = 1;

// for  (var i = 1; i <= 10; i++){
//     prod *= i;
// }

// console.log(prod);

 //problem solve 7 Calculate the sum of odd numbers greater than 10 and less than 30
// var sum = 1;

// for (var i = 2; i <= 10; i +=2 ){
//     sum *= i;
// }

// console.log(sum);

//problem solve 8 Create a function that will convert from Celsius to Fahrenheit
/*
function celsiusToFahrenheit(n){
    return n * 1.8 + 32;
}
var r = celsiusToFahrenheit(20);
console.log(r);
*/

//problem solve 9: 
/*
function fahrenheitToCelsiuis(n){
    return (n-32)/1.8;
}
var r = fahrenheitToCelsiuis(68);
console.log(r);
*/

//problem solve 10: 
// function sumArray(ar){
//     var sum = 0;
//     for (var i =0; i < ar.length; i++){
//         sum += ar[i];
//     }
//     return sum;
// }
// var ar =[2, 3, 4, 5, 6, 10, 41, 12,10];
// var sum = sumArray(ar);
// console.log(sum);

//problem solve 11: 

/*
function averageArray(ar){
    var n = ar.length;
    var sum = 0;
    for (var i = 0; i < n; i++){
        sum += ar [i];
    }
    return sum /n;
}

var ar = [1,2,3,4,5,58,36,49];
var avg = averageArray(ar);

document.write( avg)

*/


//Problem 12: 
// function getPositive(ar){
//       return ar.filter(el => el => 0);
// }

// var ar = [-5, 10, -5, 10, 50, 20, 1, 10];
// var ar2 = getPositive(ar);
// console.log(ar2)

// Problem solve 13: 

// var ar = [ -5,10, 5, 10, 5, -5, 0, 1];
// var max = findMax(ar);
// console.log("max:" , max );

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

// var n0= 0;
// console.log(n0)

// var n1= 1;
// console.log(n1)

// for (var i = 2; i < 10; i++){
//     var fi = n1 + n0;
//      console.log(fi)

//     n0 = n1;
//     n1 = fi;
// }

// Problem solve 15:

// function FibonacciNumber(n){
//     if (n == 0)
//     return 0 ;
    
//     if ( n == 1)
//     return 1;
//     return FibonacciNumber(n-1) + FibonacciNumber (n - 2);

// }

// var n = FibonacciNumber(15);
// console.log(n)

//Problem 16: 

// function IsPrime (n){
//     if (n < 2)
//     return false;
//     if ( n == 2)
//     return true;

//     var maxDiv = Math.sqrt(n);

//     for (var i = 2; i <= maxDiv; i++){
//         if ( n % i == 0){            
//             return false;
//         }
//     }
//     return true
// }

// console.log(2, "Is Prime?", IsPrime(2));
// console.log(3, "Is Prime?", IsPrime(3));
// console.log(4, "Is Prime?", IsPrime(4));
// console.log(5, "Is Prime?", IsPrime(5));
// console.log(6, "Is Prime?", IsPrime(6));
// console.log(7, "Is Prime?", IsPrime(7));
// console.log(9, "Is Prime?", IsPrime(9));
// console.log(11, "Is Prime?", IsPrime(11));

// Problem solve 17: 

// function sumDigital(n){
//     var s = n.toString();
//     var sum = 0;
//     for (var char of s){
//         var digit = parseInt(char);
//         sum += digit;
//     }
//     return sum;
// }

// var sum = sumDigital(123523141498494941);
// console.log("sum: " , sum);


//Problem solve 18: 
  
// function printPrimes(){
//     var n = 0;
//     var i = 2;
//     while( n < nPrimes){
//         if (isPrimes){
//             console.log(n,"-->", i);
//             n++
//         }
//         i++
//     }
// }

// Problem solve 19:

// 

// problem solve 21 : Rotate an array to the right 1 position

// var ar =[1,2,3];
// rotateRight (ar);
// console.log(ar);

// function rotateRight (ar){
//    var last =ar.pop();
//    ar.unshift(last);
// }

// problem solve 22: Reverse an array
// var ar = [1,2,3,4,5];
// var ar2 =reverseArray(ar);
// console.log(ar2);

// function reverseArray(ar){
//   var ar2 = [];
//   for (var i=ar.length - 1; i>=0; i--){
//     ar2.push(ar[i])
  
// }
//  return ar2;
// }

// problem solve 23: Reverse a string

// var s = reverseString("L Love You");
// console.log(s);
// function reverseString(s){
//   var s2 ="";
//   for (var i =s.length -1; i>= 0; i--){
//     var cher = s [i];
//     s2 += cher;
//   }
//   return s2;
// }
// Out put : uoY evoL L


// problem solve 24:Create a function that will merge two arrays and return the result as a new array

// var ar1 = [1,2,3,];
// var ar2 = [4,5,6];

// var ar = mergeArrays(ar1 ,ar2);

// function mergeArrays(ar1, ar2){
//   var ar = [];
//   for (let el of ar2){
//     ar.push(el);
//   }
//   return ar;
// }
// console.log(ar);
// Out put: [ 4, 5, 6 ]


// problem solve 25: 

// var ar1 =[1,2,3,4,5,6,4,7,8,9,6,41];
// var ar2 =[1,4,5,6,3,8,9,8];
//
// let ar = mergeExclusive(ar1, ar2);
// console.log(ar)
//
// function mergeExclusive(ar1, ar2){
//   let ar =[];
//   for (let el of ar1){
//     if(!ar2.includes(el)){
//       ar.push(el);
//     }
//   }
//    for (let el of ar2){
//     if(!ar1.includes(el)){
//       ar.push(el)
//     }
//    }
//    return ar;
// }
// out put : [ 2, 7, 41 ]


//problem solve 26:

// let ar1 =[1,2,3,4,5,6,7,8,9,10,14,15];
// let ar2 =[2,5,6,69,4,8,5,9];
//
// let ar = mergeLeft (ar1, ar2);
// function mergeLeft(ar1,ar2) {
//     let ar = [];
//     for (let el of ar1) {
//         let ar = [];
//
//         for (let el of ar1) {
//             if (!ar2.includes(el)) {
//                 ar.push(el);
//             }
//         }
//         return ar;
//     }
//
// }
// console.log(ar)   // out put : [ 1, 3, 7, 10, 14, 15 ]


//problem 27

// let ar = getDistinctElement([1,2,3,4,5,6,-1,-8,-9,-5]);
//
// function getDistinctElement(ar){
//     let ar2 =[];
//     for (let i =0; i < ar.length; i++){
//         if ('!isInArray',(ar[i],ar2)){
//             ar2.push(ar[i]);
//         }
//     }
//     return ar2;
// }
//
// console.log(ar)
// //out put:
//     [
//     1,  2,  3,  4,  5,
//         6, -1, -8, -9, -5
//     ]


//problem 27 part 2
// let ar = getDistinctElements([1,2,3,4,5,6,7,8,9,-1,-2,-5,-6]);
//
// function getDistinctElements(ar) {
//     let ar2 =[];
//     let lastIndex =ar.length -1;
//     for (let i = 0; i<= lastIndex; i++){
//         if ('!isInArray',(ar[i], ar, i+ 1, lastIndex)){
//             ar2.push(ar[i])
//         }
//     }
//     return ar2
// }
// console.log(ar)
// out put :
//     [
//     1, 2, 3,  4,  5,  6,
//         7, 8, 9, -1, -2, -5,
//         -6
//     ]



//problem 28:
let n =0;

function sumPrimes (n) {
    let foundPrimes = 0;
    let i = 2;
    let sum = 0;
    while (foundPrimes < n){
        if ('isPrime',(i)){
            foundPrimes++;
            sum+= i;
        }
        i++;
    }
    return sum;
}
 console.log("sum of frist ", n, "primes is ", sumPrimes(10) );

// returns true if number n is prime

function isPrime(n){
    if ( n < 2)
        return false;

    if ( n == 2 )
        return true;
    let maxDiv = Math.sqrt(n);

    for (let i =2; i<= maxDiv; i++){
        if ( n % i === 0 ){
            return false;
        }
    }
    return true;
}
