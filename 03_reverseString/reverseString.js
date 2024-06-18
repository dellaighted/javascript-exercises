const reverseString = function(str) {
    let result = "";
    let strlength = str.length;
    if (strlength < 0){
        result = "ERROR";
    }
    while (strlength >= 0){
        result += str.charAt(strlength-1);
        strlength--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
