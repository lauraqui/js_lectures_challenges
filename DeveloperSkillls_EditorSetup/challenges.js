///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
 
// Understanding the problem: 
// - How is a array into string separeted by three dots
// - How to write " numberºC in 1 days"? Answer: days will be index + 1.

// Breaking up into sub-problems: 
// - transform array into string
// - transform the string elements with ºC
// - strings needs to contain (index + 1)
// - Add three dots between elements 
// -Log string to console

// const maxTemps1 = [17,21, 23];
// const maxTemps2 = [12, 5, -5, 0, 4];



// console.log(`... ${maxTemps1[0]}ºC ...  ${maxTemps1[1]}ºC ... ${maxTemps1[2]} ºC ...`);


// const printForecast = function(arr){
// str = "";
//     for(let i=0; i < arr.length; i++) {
// str += `${arr[i]} ºC in ${i + 1} days ...`;
//     }
//     console.log('...' + str);
// }


// printForecast(maxTemps1);