const palindromes = function (phrase) {
   phraseArray=phrase.toLowerCase().split("").filter(function(char){
     return char>='a' && char<='z';
   });

   //console.log(phraseArray.reverse().join(''));
   console.log(phraseArray.join(""));

   return (phraseArray.join('')==phraseArray.reverse().join(''))


};

// Do not edit below this line
module.exports = palindromes;
