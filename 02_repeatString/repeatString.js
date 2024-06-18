const repeatString = function(str, num) {
    let result = "";
    if(num < 0){
        result = "ERROR";
    }
    if(num == 0){
        result = '';
    }
    while(num > 0){
        result += str;
        num--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
