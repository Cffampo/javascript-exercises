const reverseString = function(word) {

    result = "";

    for(let i = word.length - 1; i >= 0; i--){
        result += word.charAt(i);
    }

    return result;

};

// Do not edit below this line
module.exports = reverseString;
