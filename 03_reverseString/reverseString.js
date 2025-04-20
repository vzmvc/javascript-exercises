const reverseString = function(input) {
    var reverse = "";
    for (var i = input.length-1; i >= 0 ; i--){
        reverse = reverse+input[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
