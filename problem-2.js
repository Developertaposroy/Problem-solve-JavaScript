// Problem 1

// const number =[4,2,7,1,8];
// let smallestNumber = number[0];
// for (let i =1; i < number.length; i++){
//     if(number[i] < smallestNumber){
//         smallestNumber = number[i];
//     }
// }
//
// console.log(smallestNumber)

// Problem 2:
// const number =[1,2,3,4,5];
// let largestNumber = number[0];
//
// for( let i =1; i < number.length; i++){
//     if (number[i] > largestNumber){
//         largestNumber =number[i];
//     }
// }
// console.log(largestNumber)

// Problem 3
// const numbers =[1,2,3,4,5];
// let sum =0;
// for (let i=0; i < numbers.length; i++){
//     sum += numbers[i]
// }
//  console.log(sum) //out put : 15


// Problem 4
// const strings = ['hello ', 'world', 'foo', 'bar' , 'tapos']
// const firstLetter =[];
// for (let i=0; i <strings.length; i++){
//     firstLetter.push(strings[i][0]);
// }
//
// console.log(firstLetter) //out put: [ 'h', 'w', 'f', 'b' ]


// Problem 5
// const number =[1,2,3,4,5,6,8];
// const event = [];
// for (let i=0; i < number.length; i++){
//     if (number[i] %2 === 0){
//         event.push(number[i])
//     }
// }
// console.log(event)  //out put: [ 2, 4, 6, 8 ]


// Problem 6

// const strings =['Hello', 'world', 'food', 'tea', ];
// let longString = strings[0];
// for (let i= 1; i<strings.length; i++){
//     if (strings[i].length > longString[i]){
//         longString =strings[i];
//     }
// }
// console.log(longString)  // out put: 'hello'


// Problem 7
// const numbers =[1,2,3,4,5,6,7,8];
// let sum = 0;
// for (let i=0; i< numbers.length; i++){
//     sum +=numbers[i];
//
// }
// const average = sum / numbers.length;
// console.log(average) // out put: 4.5
//


// Problem 8

// const strings =['hello', 'world', 'food','bar']
// console.log(strings.sort()) // [ 'bar', 'food', 'hello', 'world' ]



// Problem 9
// const number =[1,5,9,6,3,8,7,4,8,10]
// const uniNumber = [...new Set(number)]
// console.log(uniNumber)
// out put[
//     [
//     1, 5, 9,  6, 3,
//         8, 7, 4, 10
//     ]

//problem 10

// const numbers =[1,2,3,4,5,6];
// const target =9;
// for (let i=0; i<numbers.length; i++ ){
//     for (let j=i +1; j<numbers.length; j++){
//         if (numbers[i] + numbers[j] === target){
//             console.log(numbers[i], numbers[j])
//         }
//     }
// }
// out put : 
// 3 6
// 4 5



