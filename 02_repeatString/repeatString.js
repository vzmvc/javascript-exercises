const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    var concat = "";
    for (i=0 ; i < num; i++){
        concat = concat+str;
    }
    return concat;    
};

// Do not edit below this line
module.exports = repeatString;
