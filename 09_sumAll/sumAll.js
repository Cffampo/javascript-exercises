const sumAll = function(startNumber, endNumber) {

    if(startNumber < 0|| endNumber < 0){
        return "ERROR";
    }

    if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
    return "ERROR";

    }

    if (startNumber > endNumber) {
    [startNumber, endNumber] = [endNumber, startNumber];
}


    let sum = 0;

    for(let i = startNumber; i <= endNumber; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
