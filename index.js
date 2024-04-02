// code your solution here
//saturday function and default activity
function saturdayFun(activity = "roller-skate") {
    
      
      return  "This Saturday , Iwant to ${activity}!";

};



console.log(saturdayFun()); 

// Permitting the default activity to be overridden with "bathe my dog"
console.log(saturdayFun("bathe my dog"));


// Defines mondayWork function expression 
const mondayWork = function (activity = "go to the office") {
    return 'This Monday, I will ${activity}.'
}
console.log(mondayWork("work from home"))

// Defines wrapAdjective function 
//Defines wrapAdjective function 
function wrapAdjective(symbol = "*") {
    return function (adjective = "a hard worker") {
        return  "You are ${symbol}${adjective}${symbol}!" ;
    }
}

// Initialize the function with '*'
const wrapWithAsterisk = wrapAdjective('*');

// Call the created function with an adjective
constresult  = wrapWithAsterisk("a hard worker");

//call the created function with an adjective
constresult  = wrapWithAsterisk('||a dedicated programmer||!')


console.log(result); 
    

module.exports = {

    saturdayFun,
    mondayWork,
    wrapAdjective
};