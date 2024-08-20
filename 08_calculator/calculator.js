const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	const result = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return result
};

const multiply = function(arr) {
  const result = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return result
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
  let sum = 1;
  while(x >= 0){
    if (x == 0){
      sum = sum * 1
    }else{
      sum = sum * x;
    }
    x = x-1;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
