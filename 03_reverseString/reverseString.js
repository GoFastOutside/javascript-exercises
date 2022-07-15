const reverseString = function(string) {
    let reversed=[];

    for ( let i = string.length -1 ; i>-1 ; i--){
        reversed.push(string[i]);
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
