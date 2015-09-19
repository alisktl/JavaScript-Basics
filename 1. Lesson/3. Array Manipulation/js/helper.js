var sampleArray = [0,0,7];

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

console.log(incrementLastArrayElement(sampleArray));