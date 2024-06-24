const removeFromArray = function(arr, ...items) {
    i = 0;
    while(i < arr.length){
        for(arg of items){
            index = arr.indexOf(arg);
            if(index > -1){
                arr.splice(index, 1);
            }else{
                i++;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
