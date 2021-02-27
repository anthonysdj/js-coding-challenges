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

    if (str1.length !== str2.length) return false

    let sorted = sortStr2({srcStr: str1, targetStr: str2})

    return str1 === sorted
}

module.exports = isAnagrams