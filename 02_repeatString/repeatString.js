const repeatString = function(string, num) {
    if (num<0){
        return 'ERROR';
    }

    //Create a variable to hold the string you're going to return
    let repeatedString = '';
    // create a loop that repeats the given number of times
    for (let i=0; i<num;i++){
        repeatedString = repeatedString + string;
    } 
    //and add the given string to the result on each loop.

    return repeatedString;


};

// Do not edit below this line
module.exports = repeatString;
