/**
 * Plan
 * check if both string have the same length
 * loop through the first string
 * sort the second string
 * compare both string
 */

const sortStr2 = ({srcStr, targetStr, output = ''}) => {
    if (!srcStr) return output

    const srcStrToArray = srcStr.split('')
    const newOutput = output + srcStrToArray.shift()

    return sortStr2({srcStr: srcStrToArray.join(''), targetStr, output: newOutput})
}

const isAnagrams = (str1, str2) => {
    if (!str1 || !str2 || typeof str1 !== 'string' || typeof str2 !== 'string') return null

    // remove whitespace before comparing the length of strings
    if (str1.trim().length !== str2.trim().length) return false

    // sort the second string/target string
    let sorted = sortStr2({srcStr: str1, targetStr: str2})

    // compare string values if they are the same
    return str1 === sorted
}

module.exports = isAnagrams