/**
 * 
 * Plan
 * map each charter to an object with key as the character and value as the character count
 * loop through the key value object and return the key value pair with the highest count
 * return the chararcter with the highest count value
 */

const mapCharAndCount = (str, output = {}) => {
    if (!str) return output

    const strToArr = str.split('')
    const char = strToArr.shift();
    output[char] = ++output[char] || 1

    return mapCharAndCount(strToArr.join(''), output)
}

const maxCharCountObj = (keys, obj, output = {}) => {
    if (keys.length < 1) return output

    const char = keys.shift()

    if (!output.count) return maxCharCountObj(keys, obj, {char: char, count: obj[char]})

    if (output.count <= obj[char]) return maxCharCountObj(keys, obj, {char: char, count: obj[char]})

    return maxCharCountObj(keys, obj, output)
}

const getMostUsedCharInString = (string) => {
    if (!string || typeof string !== 'string') return null

    const charCountObj = mapCharAndCount(string)

    const output = maxCharCountObj(Object.keys(charCountObj), charCountObj)

    return output.char === ' ' ? 'white-space' : output.char
}

module.exports = getMostUsedCharInString