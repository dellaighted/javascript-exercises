const convertToCelsius = function(temp) {
  result = (temp - 32) * 5/9;
  if(result % 1 == 0){
    return result;
  }else{
    return Number(result.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  result = (temp * 9/5) + 32;
  if(result % 1 == 0){
    return result;
  }else{
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
