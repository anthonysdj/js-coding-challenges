const getLongestStringFromArray = (array, currentLongest = "") => {
    if (!Array.isArray(array) || array.length < 1) return 'Input must be a non-empty array';

    // if this is the last item in the array compare the value to the last longest string value
    if (array.length === 1) {
        return array[0].length > currentLongest.length ? array[0] : currentLongest
    }
 
    // get the first value from array
    const currentValue = array.shift();

    // remove first value from array
    const newArray = array.filter(arr => {
        return arr !== currentValue
    })

    return currentLongest.length < currentValue.length ? getLongestStringFromArray(newArray, currentValue) : getLongestStringFromArray(newArray, currentLongest)
}

module.exports = getLongestStringFromArray