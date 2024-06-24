const sumAll = function(i, j) {
    result = 0;

    if(typeof(i) != "number" || typeof(j) != "number" ||
        i < 0 || j < 0){
        return 'ERROR';
    }

    start = 0;
    end = 0;

    if(i < j){
        start = i;
        end = j;
    }else{
        start = j;
        end = i;
    }

    while(start <= end){
        result += start;
        start++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
