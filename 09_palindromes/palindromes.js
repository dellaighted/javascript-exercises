const palindromes = function (str) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
    const cleanStr = str.toLowerCase().split('');
    const filteredStr = cleanStr.filter((character) => alphanumeric.includes(character)).join('');

    const reverseStr = filteredStr.split('').reverse().join('');

    return filteredStr === reverseStr;
};

module.exports = palindromes;