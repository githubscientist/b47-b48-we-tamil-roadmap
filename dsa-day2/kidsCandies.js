// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

// return true or false
// based on whether if the totalCandies is greater than all the other kids candies
// except the index i
// var isGreater = function(totalCandies, candies, i){
//     // assume that the totalCandies is greater than all the other kids candies
//     let assumption = true;
//     // validate if the assumption is true or false
//     // loop the candies array except the index i <- index = 0 to candies.length - 1
//     for(let index = 0; index < candies.length; index++){
//         // except the index i 
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // update the assumption
//                 assumption = false;
//             }
//         }
//     }
//     // return the assumption
//     return assumption;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty boolean array <- result
//     let result = [];

//     // loop the array candies i = 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every candy @ index i
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than or equal to all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // if false => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// Time Complexity: O(N^2)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index = 0; index < candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }
//     return assumption;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index = 0; index < candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//                 break;
//             }
//         }
//     }
//     return assumption;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var isGreater = function(totalCandies, candies, i){
//     for(let index = 0; index < candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var isGreater = function(totalCandies, candies, i){
//     for(let index = 0; index < candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var isGreater = function(totalCandies, candies, i){
//     for(let index = 0; index < candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }


// Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         let greatestCandy = Math.max(...candies);
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach((candy) => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map((candy) => {
//         return candy + extraCandies >= greatestCandy;
//     })
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map((candy) => {
//         return candy + extraCandies >= greatestCandy;
//     });
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// time complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};


/*
    1. Problem Understanding
    2. Validation

    n kids
    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    
    extraCandies = 3

    result = [true, true, true, false, true]
           i [0]   [1]   [2]    [3]     [4]

    kid @ i = 0
        totalCandies = candies[i] + extraCandies
                     = 2 + 3
                     = 5 >= [3, 5, 1, 3]
                            [1][2][3][4]
                            T   T   T   T
    
    kid @ i = 1
        totalCandies = candies[i] + extraCandies
                     = 3 + 3
                     = 6 >= [2, 5, 1, 3]
                            [0][2][3][4]
                            T   T   T   T
    
    kid @ i = 2
        totalCandies = candies[i] + extraCandies
                     = 5 + 3
                     = 8 >= [2, 3, 1, 3]
                            [0][1][3][4]
                            T   T   T   T
    
    kid @ i = 3
        totalCandies = candies[i] + extraCandies
                     = 1 + 3
                     = 4 >= [2, 3, 5, 3]
                            [0][1][2][4]
                            T   T   F   T
    
    kid @ i = 4
        totalCandies = candies[i] + extraCandies
                     = 3 + 3
                     = 6 >= [2, 3, 5, 1]
                            [0][1][2][3]
                            T   T   T   T

    3. Algorithm

    initialize an empty boolean array <- result

    loop the array candies i = 0 to candies.length - 1
        for every candy @ index i
        find the totalCandies = candies[i] + extraCandies

        check if the totalCandies is greater than or equal to all the other kids candies
        if true => push true to the result array
        if false => push false to the result array
    
    return the result array
*/