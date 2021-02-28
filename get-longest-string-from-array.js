const getLongestStringFromArray = (array, currentLongest = "") => {
    if (!array || !Array.isArray(array) || array.length < 1) return null;

    // if this is the last item in the array compare the value to the last longest string value
    if (array.length === 1) {
        return array[0].length > currentLongest.length ? array[0] : currentLongest
    }
 
    // get the first value from array
    const currentValue = array.concat().shift();

    // remove first value from array
    const newArray = array.slice(1)

    return currentLongest.length < currentValue.length ? getLongestStringFromArray(newArray, currentValue) : getLongestStringFromArray(newArray, currentLongest)
}

module.exports = getLongestStringFromArray